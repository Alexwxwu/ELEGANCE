<script setup>
</script>

<template>
  <div>
    <el-divider />

    <!-- 第一类：Guidance Strategies -->
    <el-row justify="center">
      <h1 class="category-title">1. Different Guidance Strategies</h1>
    </el-row>

    <el-row justify="center">
      <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="10">
        <div class="audio-item" v-for="audio in guidanceAudios" :key="audio.name">
          <h3 class="audio-title">{{ audio.name }}</h3>
          <audio controls>
            <source :src="audio.path" type="audio/wav">
          </audio>
        </div>
      </el-col>
    </el-row>

    <el-divider />

    <!-- 第二类：LLM Type & Size -->
    <el-row justify="center">
      <h1 class="category-title">2. Different LLM Type & Size</h1>
    </el-row>

    <el-row justify="center">
      <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="10">
        <div class="audio-item" v-for="audio in llmAudios" :key="audio.name">
          <h3 class="audio-title">{{ audio.name }}</h3>
          <audio controls>
            <source :src="audio.path" type="audio/wav">
          </audio>
        </div>
      </el-col>
    </el-row>

    <el-divider />

    <!-- 第三类：Cross-lingual Evaluation -->
    <el-row justify="center">
      <h1 class="category-title">3. Cross-lingual Evaluation</h1>
    </el-row>

    <el-row justify="center">
      <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="10">
        <div class="audio-item" v-for="audio in crosslingualAudios" :key="audio.name">
          <h3 class="audio-title">{{ audio.name }}</h3>
          <audio controls>
            <source :src="audio.path" type="audio/wav">
          </audio>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      guidanceAudios: [
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
      llmAudios: [
        { name: 'USEV (sample1)', path: '/output_audio/llm/sample1/USEV.wav' },
        { name: 'USEV-I-Roberta (sample1)', path: '/output_audio/llm/sample1/USEV-I-Roberta.wav' },
        { name: 'USEV-I-Qwen0.6b (sample1)', path: '/output_audio/llm/sample1/USEV-I-qwen06b.wav' },
        { name: 'USEV-I-Qwen4b (sample1)', path: '/output_audio/llm/sample1/USEV-I-qwen4b.wav' },
        { name: 'USEV (sample2)', path: '/output_audio/llm/sample2/USEV.wav' },
        { name: 'USEV-I-Roberta (sample2)', path: '/output_audio/llm/sample2/USEV-I-Roberta.wav' },
        { name: 'USEV-I-Qwen0.6b (sample2)', path: '/output_audio/llm/sample2/USEV-I-qwen06b.wav' },
        { name: 'USEV-I-Qwen4b (sample2)', path: '/output_audio/llm/sample2/USEV-I-qwen4b.wav' }
      ],
      crosslingualAudios: [
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
}
</script>

<style scoped>
/* 主标题样式 */
.section-title {
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: bold;
}

/* 分类标题样式 */
.category-title {
  text-align: center;
  color: #409eff;
  margin: 2rem 0;
  font-size: 1.5rem;
  font-weight: bold;
  border-bottom: 2px solid #409eff;
  padding-bottom: 0.5rem;
  display: inline-block;
}

/* 音频项样式 */
.audio-item {
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 15px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.audio-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* 音频标题样式 */
.audio-title {
  margin-top: 0;
  margin-bottom: 1rem;
  color: #333;
  font-size: 1.2rem;
  text-align: center;
}

/* 音频控件样式 */
audio {
  width: 100%;
  margin-top: 0.5rem;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .audio-item {
    padding: 1rem;
  }
  
  .category-title {
    font-size: 1.3rem;
  }
  
  .audio-title {
    font-size: 1.1rem;
  }
}
</style>
