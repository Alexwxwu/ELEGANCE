<template>
  <div>
    <el-divider />
    <div class="audio-player-section">
      <h2 class="section-title">Extraction Results</h2>

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
              console.log("audioaudioaudioaudioaudiopath: ","audio.path")
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
          { name: 'Mixture', path: '/output_audio/guidance/mix.wav' },
          { name: 'GT', path: '/output_audio/guidance/tgt.wav' },
          { name: 'USEV', path: '/output_audio/guidance/usev.wav' },
          { name: 'USEV-I-Roberta', path: '/output_audio/guidance/usev-i.wav' },
          { name: 'USEV-M-Roberta', path: '/output_audio/guidance/usev-m.wav' },
          { name: 'USEV-O-Roberta', path: '/output_audio/guidance/usev-o.wav' },
          { name: 'AV-Mamba', path: '/output_audio/guidance/avmamba.wav' },
          { name: 'AV-Mamba-I-Roberta', path: '/output_audio/guidance/avmamba-i.wav' },
          { name: 'AV-Mamba-M-Roberta', path: '/output_audio/guidance/avmamba-m.wav' },
          { name: 'AV-Mamba-O-Roberta', path: '/output_audio/guidance/avmamba-o.wav' }
        ],
        llm: [
          { name: 'USEV(sample1)', path: '/output_audio/llm/sample1/USEV.wav' },
          { name: 'USEV-I-Roberta(sample1)', path: '/output_audio/llm/sample1/USEV-I-Roberta.wav' },
          { name: 'USEV-I-Qwen0.6b(sample1)', path: '/output_audio/llm/sample1/USEV-I-qwen06b.wav' },
          { name: 'USEV-I-Qwen4b(sample1)', path: '/output_audio/llm/sample1/USEV-I-qwen4b.wav' },
          { name: 'USEV(sample2)', path: '/output_audio/llm/sample2/USEV.wav' },
          { name: 'USEV-I-Roberta(sample2)', path: '/output_audio/llm/sample2/USEV-I-Roberta.wav' },
          { name: 'USEV-I-Qwen0.6b(sample2)', path: '/output_audio/llm/sample2/USEV-I-qwen06b.wav' },
          { name: 'USEV-I-Qwen4b(sample2)', path: '/output_audio/llm/sample2/USEV-I-qwen4b.wav' }
        ],
        crosslingual: [
          { name: 'USEV-PT', path: '/output_audio/crosslingual/USEV-PT.wav' },
          { name: 'USEV-I-Roberta-PT', path: '/output_audio/crosslingual/USEV-I-PT.wav' },
          { name: 'USEV-IT', path: '/output_audio/crosslingual/USEV-IT.wav' },
          { name: 'USEV-I-Roberta-IT', path: '/output_audio/crosslingual/USEV-I-IT.wav' },
          { name: 'USEV-ES', path: '/output_audio/crosslingual/USEV-ES.wav' },
          { name: 'USEV-I-Roberta-ES', path: '/output_audio/crosslingual/USEV-I-ES.wav' },
          { name: 'USEV-FR', path: '/output_audio/crosslingual/USEV-FR.wav' },
          { name: 'USEV-I-Roberta-FR', path: '/output_audio/crosslingual/USEV-I-FR.wav' }
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
    getFullAudioPath(relativePath) {
      // return `https://cdn.jsdelivr.net/gh/Alexwxwu/ELEGANCE@main/public${relativePath}`;
      // 方案1：基础路径处理（适用于GitHub Pages）
      return `/ELEGANCE${relativePath}`;
      
      // 方案2：动态环境适配（推荐）
      // return `${process.env.BASE_URL || ''}${relativePath}`;
      
      // 方案3：使用CDN（如果GitHub Pages仍有问题）
      // return `https://cdn.jsdelivr.net/gh/Alexwxwu/ELEGANCE@main/public${relativePath}`;
    },
    onCategoryChange() {
      const audioElements = this.$el.querySelectorAll('audio');
      audioElements.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    },
    handleAudioError(event) {
      console.error('音频加载失败:', {
        src: event.target.src,
        error: event.target.error
      });
      // 可以在这里添加用户提示
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
