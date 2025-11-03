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

      <!-- 音频播放器部分 -->
      <div class="audio-content">
        <div class="audio-grid">
          <!-- 动态生成的音频项 -->
          <div v-for="audio in currentAudioFiles" :key="audio.name" class="audio-item">
            <h3>{{ audio.name }}</h3>
            <audio controls :src="audio.path">
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
      audioFilesByCategory: {
        guidance: [
          { name: 'USEV', path: '/ELEGANCE/output_audio/guidance/USEV.wav' },
          { name: 'USEV-I-Roberta', path: '/ELEGANCE/output_audio/guidance/USEV-I-Roberta.wav' },
          { name: 'USEV-M-Roberta', path: '/ELEGANCE/output_audio/guidance/USEV-M-Roberta.wav' },
          { name: 'USEV-O-Roberta', path: '/ELEGANCE/output_audio/guidance/USEV-O-Roberta.wav' },
          { name: 'AV-Mamba', path: '/ELEGANCE/output_audio/guidance/AV-Mamba.wav' },
          { name: 'AV-Mamba-I-Roberta', path: '/ELEGANCE/output_audio/guidance/AV-Mamba-I-Roberta.wav' },
          { name: 'AV-Mamba-M-Roberta', path: '/ELEGANCE/output_audio/guidance/AV-Mamba-M-Roberta.wav' },
          { name: 'AV-Mamba-O-Roberta', path: '/ELEGANCE/output_audio/guidance/AV-Mamba-O-Roberta.wav' }
        ],
        llm: [
          { name: 'USEV', path: '/ELEGANCE/output_audio/llm/USEV.wav' },
          { name: 'USEV-I-Roberta', path: '/ELEGANCE/output_audio/llm/USEV-I-Roberta.wav' },
          { name: 'USEV-I-Qwen0.6b', path: '/ELEGANCE/output_audio/llm/USEV-I-Qwen0.6b.wav' },
          { name: 'USEV-I-Qwen4b', path: '/ELEGANCE/output_audio/llm/USEV-I-Qwen4b.wav' }
        ],
        crosslingual: [
          { name: 'USEV-PT', path: '/ELEGANCE/output_audio/crosslingual/USEV-PT.wav' },
          { name: 'USEV-I-Roberta-PT', path: '/ELEGANCE/output_audio/crosslingual/USEV-I-Roberta-PT.wav' },
          { name: 'USEV-IT', path: '/ELEGANCE/output_audio/crosslingual/USEV-IT.wav' },
          { name: 'USEV-I-Roberta-IT', path: '/ELEGANCE/output_audio/crosslingual/USEV-I-Roberta-IT.wav' },
          { name: 'USEV-ES', path: '/ELEGANCE/output_audio/crosslingual/USEV-ES.wav' },
          { name: 'USEV-I-Roberta-ES', path: '/ELEGANCE/output_audio/crosslingual/USEV-I-Roberta-ES.wav' },
          { name: 'USEV-FR', path: '/ELEGANCE/output_audio/crosslingual/USEV-FR.wav' },
          { name: 'USEV-I-Roberta-FR', path: '/ELEGANCE/output_audio/crosslingual/USEV-I-Roberta-FR.wav' }
        ]
      }
    }
  },
  computed: {
    currentAudioFiles() {
      return this.audioFilesByCategory[this.selectedCategory] || [];
    }
  },
  methods: {
    onCategoryChange() {
      const audioElements = this.$el.querySelectorAll('audio');
      audioElements.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
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
</style>
