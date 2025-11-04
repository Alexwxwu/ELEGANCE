 <script setup>
import { ref } from 'vue'

const selectedCategory = ref('guidance')
</script>

<template>
  <div>
    <el-divider />

    <el-row justify="center">
      <h1 class="section-title">Audio Samples</h1>
    </el-row>

    <!-- 类别选择器 -->
    <el-row justify="center" class="category-selector">
      <el-radio-group v-model="selectedCategory">
        <el-radio-button label="guidance">Guidance Strategies</el-radio-button>
        <el-radio-button label="llm">LLM Type & Size</el-radio-button>
        <el-radio-button label="crosslingual">Cross-lingual</el-radio-button>
      </el-radio-group>
    </el-row>

    <!-- Guidance Strategies -->
    <div v-show="selectedCategory === 'guidance'">
      <el-row justify="center">
        <h2 class="category-title">1. Different Guidance Strategies</h2>
      </el-row>

      <el-row justify="center">
        <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="10">
          <div class="audio-item">
            <h3 class="audio-title">Mixture</h3>
            <audio controls>
              <source src="/output_audio/guidance/mix.wav" type="audio/wav">
            </audio>
          </div>
          
          <div class="audio-item">
            <h3 class="audio-title">GT</h3>
            <audio controls>
              <source src="/output_audio/guidance/tgt.wav" type="audio/wav">
            </audio>
          </div>

          <!-- 其他guidance音频... -->
        </el-col>
      </el-row>
    </div>

    <!-- LLM Type & Size -->
    <div v-show="selectedCategory === 'llm'">
      <el-row justify="center">
        <h2 class="category-title">2. Different LLM Type & Size</h2>
      </el-row>

      <el-row justify="center">
        <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="10">
          <div class="audio-item">
            <h3 class="audio-title">USEV (sample1)</h3>
            <audio controls>
              <source src="/output_audio/llm/sample1/USEV.wav" type="audio/wav">
            </audio>
          </div>

          <div class="audio-item">
            <h3 class="audio-title">USEV-I-Roberta (sample1)</h3>
            <audio controls>
              <source src="/output_audio/llm/sample1/USEV-I-Roberta.wav" type="audio/wav">
            </audio>
          </div>

          <!-- 其他llm音频... -->
        </el-col>
      </el-row>
    </div>

    <!-- Cross-lingual Evaluation -->
    <div v-show="selectedCategory === 'crosslingual'">
      <el-row justify="center">
        <h2 class="category-title">3. Cross-lingual Evaluation</h2>
      </el-row>

      <el-row justify="center">
        <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="10">
          <div class="audio-item">
            <h3 class="audio-title">USEV-PT</h3>
            <audio controls>
              <source src="/output_audio/crosslingual/USEV-PT.wav" type="audio/wav">
            </audio>
          </div>

          <div class="audio-item">
            <h3 class="audio-title">USEV-I-PT</h3>
            <audio controls>
              <source src="/output_audio/crosslingual/USEV-I-PT.wav" type="audio/wav">
            </audio>
          </div>

          <!-- 其他crosslingual音频... -->
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped>
.section-title {
  text-align: center;
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  font-weight: bold;
}

.category-selector {
  margin: 2rem 0;
}

.category-title {
  text-align: center;
  color: #409eff;
  margin: 2rem 0 1rem;
  font-size: 1.5rem;
  font-weight: bold;
}

.audio-item {
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 15px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.audio-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.audio-title {
  margin: 0 0 1rem 0;
  color: #333;
  font-size: 1.2rem;
  text-align: center;
}

audio {
  width: 100%;
}

@media (max-width: 768px) {
  .audio-item {
    padding: 1rem;
  }
  
  .category-title {
    font-size: 1.3rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
}
</style>
