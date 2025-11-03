<template>
  <div>
    <el-divider />
    <div class="audio-player-section">
      <h2 class="section-title">Audio Separation Results</h2>

      <!-- 音频类别选择器 -->
      <div class="audio-selector">
        <label for="category-select">Select Category:</label>
        <select id="category-select" v-model="selectedCategory" @change="onCategoryChange">
          <option value="guidance">1. Different guidance strategies</option>
          <option value="llm">2. Different LLM type&size</option>
          <option value="crosslingual">3. Cross-lingual evaluation</option>
        </select>
      </div>

      <!-- 音频文件选择器 -->
      <div class="audio-selector">
        <label for="audio-select">Select Audio File:</label>
        <select id="audio-select" v-model="selectedAudio" @change="onAudioChange">
          <option value="">Please select an audio file</option>
          <option v-for="audio in audioFiles" :key="audio" :value="audio">
            {{ formatAudioName(audio) }}
          </option>
        </select>
      </div>

      <!-- 音频播放器部分 -->
      <div class="audio-content">
        <div class="audio-grid">
          <!-- 混合音频 -->
          <div class="audio-item">
            <h3>Mixture</h3>
            <audio controls :src="getAudioPath('mixture', selectedAudio)">
              Your browser does not support audio playback.
            </audio>
          </div>

          <!-- Ground Truth -->
          <div class="audio-item">
            <h3>Ground Truth</h3>
            <audio controls :src="getAudioPath('gt', selectedAudio)">
              Your browser does not support audio playback.
            </audio>
          </div>

          <!-- 动态生成的音频项 -->
          <div v-for="method in currentMethods" :key="method" class="audio-item">
            <h3>{{ method }}</h3>
            <audio controls :src="getAudioPath(method, selectedAudio)">
              Your browser does not support audio playback.
            </audio>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AudioPlayer',
  data() {
    return {
      selectedCategory: 'guidance',
      selectedAudio: '6339077953587836416_00025_1.048_6338273935710083967_00003_-1.048',
      audioFiles: [
        '6339077953587836416_00025_1.048_6338273935710083967_00003_-1.048',
        '6355861826787125225_00011_0.88796_6360685934053997353_00007_-0.88796',
        '6365141533126941637_00051_1.5209_6369259547770281088_00021_-1.5209',
        '6368494184598133861_00017_4.2493_6363654615448994597_00013_-4.2493',
        '6375480378401815497_00001_2.2431_6368494184598133861_00017_-2.2431',
        '6382189546814897943_00019_0.74266_6338273935710083967_00003_-0.74266'
      ],
      methodsByCategory: {
        guidance: ['USEV', 'USEV-I-Roberta', 'USEV-M-Roberta', 'USEV-O-Roberta', 'AV-Mamba', 'AV-Mamba-I-Roberta', 'AV-Mamba-M-Roberta', 'AV-Mamba-O-Roberta'],
        llm: ['USEV', 'USEV-I-Roberta', 'USEV-I-Qwen0.6b', 'USEV-I-Qwen4b'],
        crosslingual: ['USEV-PT', 'USEV-I-PT', 'USEV-IT', 'USEV-I-IT', 'USEV-ES', 'USEV-I-ES', 'USEV-FR', 'USEV-I-FR']
      }
    }
  },
  computed: {
    currentMethods() {
      return this.methodsByCategory[this.selectedCategory] || [];
    }
  },
  methods: {
    formatAudioName(filename) {
      const parts = filename.split('_');
      return `Audio Sample ${parts[1] || '1'}`;
    },
    getAudioPath(method, filename) {
      return `/ELEGANCE/output_audio/${method}/${filename}.wav`;
    },
    onAudioChange() {
      const audioElements = this.$el.querySelectorAll('audio');
      audioElements.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    },
    onCategoryChange() {
      this.selectedAudio = '';
      this.onAudioChange();
    }
  }
}
</script>

<style scoped>
.audio-player-section {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: bold;
}

.audio-selector {
  margin-bottom: 2rem;
  text-align: center;
}

.audio-selector label {
  font-weight: bold;
  margin-right: 1rem;
  color: #555;
}

.audio-selector select {
  padding: 0.5rem 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  background-color: white;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.audio-selector select:hover {
  border-color: #007bff;
}

/* <style scoped>
/* ... (previous styles) ... */ */

.audio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.audio-item {
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.audio-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.audio-item h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: #333;
  font-size: 1.2rem;
}

.audio-item audio {
  width: 100%;
  margin-bottom: 0.5rem;
}

.category-selector {
  margin-bottom: 2rem;
  text-align: center;
}

.category-selector button {
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.category-selector button:hover {
  background-color: #0056b3;
}

.category-selector button.active {
  background-color: #0056b3;
  font-weight: bold;
}
</style>

<template>
  <section class="audio-player-section">
    <h2 class="section-title">Audio Comparison</h2>
    
    <div class="category-selector">
      <button 
        v-for="category in Object.keys(methodsByCategory)" 
        :key="category"
        @click="selectedCategory = category; onCategoryChange()"
        :class="{ active: selectedCategory === category }"
      >
        {{ category.charAt(0).toUpperCase() + category.slice(1) }}
      </button>
    </div>
    
    <div class="audio-selector">
      <label for="audio-select">Select Audio Sample:</label>
      <select id="audio-select" v-model="selectedAudio" @change="onAudioChange">
        <option value="">Choose an audio file</option>
        <option v-for="file in audioFiles" :key="file" :value="file">
          {{ formatAudioName(file) }}
        </option>
      </select>
    </div>

    <div v-if="selectedAudio" class="audio-grid">
      <div v-for="method in currentMethods" :key="method" class="audio-item">
        <h3>{{ method }}</h3>
        <audio :src="getAudioPath(method, selectedAudio)" controls></audio>
      </div>
    </div>
  </section>
</template>

