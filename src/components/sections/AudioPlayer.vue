<script setup>
import { ref } from 'vue'

const selectedDemo = ref('demo1') // 默认选择demo1
</script>

<template>
  <div>
    <el-divider />
    
    <el-row justify="center">
      <h1 class="section-title">Audio Separation Results</h1>
    </el-row>
    
    <!-- Demo选择器 -->
    <el-row justify="center" class="demo-selector">
      <el-radio-group v-model="selectedDemo">
        <el-radio-button label="demo1">Demo 1</el-radio-button>
        <el-radio-button label="demo2">Demo 2</el-radio-button>
        <el-radio-button label="demo3">Demo 3</el-radio-button>
      </el-radio-group>
    </el-row>

    <!-- Demo 1 内容 -->
    <div v-show="selectedDemo === 'demo1'">
      <el-row justify="center">
        <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="10">
          <div class="audio-item">
            <h3 class="audio-title">Mixture</h3>
            <audio controls class="small-audio">
              <source src="/output_audio/guidance/mix.wav" type="audio/wav">
            </audio>
          </div>
          
          <div class="audio-item">
            <h3 class="audio-title">GT</h3>
            <audio controls class="small-audio">
              <source src="/output_audio/guidance/tgt.wav" type="audio/wav">
            </audio>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- Demo 2 内容 -->
    <div v-show="selectedDemo === 'demo2'">
      <el-row justify="center">
        <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="10">
          <div class="audio-item">
            <h3 class="audio-title">USEV</h3>
            <audio controls class="small-audio">
              <source src="/output_audio/guidance/usev.wav" type="audio/wav">
            </audio>
          </div>
          
          <div class="audio-item">
            <h3 class="audio-title">USEV-I-Roberta</h3>
            <audio controls class="small-audio">
              <source src="/output_audio/guidance/usev-i.wav" type="audio/wav">
            </audio>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- Demo 3 内容 -->
    <div v-show="selectedDemo === 'demo3'">
      <el-row justify="center">
        <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="10">
          <div class="audio-item">
            <h3 class="audio-title">AV-Mamba</h3>
            <audio controls class="small-audio">
              <source src="/output_audio/guidance/avmamba.wav" type="audio/wav">
            </audio>
          </div>
          
          <div class="audio-item">
            <h3 class="audio-title">AV-Mamba-I-Roberta</h3>
            <audio controls class="small-audio">
              <source src="/output_audio/guidance/avmamba-i.wav" type="audio/wav">
            </audio>
          </div>
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

.demo-selector {
  margin: 1.5rem 0;
}

.audio-item {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  margin: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.audio-title {
  margin: 0 0 0.5rem 0;
  color: #333;
  font-size: 1.1rem;
  text-align: center;
}

/* 缩小音频控制条 */
.small-audio {
  width: 100%;
  height: 40px; /* 控制高度 */
  transform: scale(0.9); /* 整体缩放 */
  transform-origin: left center;
}

/* 更紧凑的布局 */
.audio-item {
  padding: 0.8rem;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.5rem;
  }
  
  .audio-title {
    font-size: 1rem;
  }
  
  .small-audio {
    height: 36px;
    transform: scale(0.85);
  }
}
</style>
