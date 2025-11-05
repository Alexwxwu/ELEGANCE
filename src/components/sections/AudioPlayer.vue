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
         <div class="audio-item">
            <h3 class="audio-title">USEV</h3>
            <audio controls>
              <source src="/output_audio/guidance/usev.wav" type="audio/wav">
            </audio>
          </div>
          <div class="audio-item">
            <h3 class="audio-title">USEV-I-Roberta</h3>
            <audio controls>
              <source src="/output_audio/guidance/usev-i.wav" type="audio/wav">
            </audio>
          </div>
         <div class="audio-item">
            <h3 class="audio-title">USEV-M-Roberta</h3>
            <audio controls>
              <source src="/output_audio/guidance/usev-m.wav" type="audio/wav">
            </audio>
          </div>

         <div class="audio-item">
            <h3 class="audio-title">USEV-O-Roberta</h3>
            <audio controls>
              <source src="/output_audio/guidance/usev-o.wav" type="audio/wav">
            </audio>
          </div>
         
         <div class="audio-item">
            <h3 class="audio-title">AV-Mamba</h3>
            <audio controls>
              <source src="/output_audio/guidance/avmamba.wav" type="audio/wav">
            </audio>
          </div>
         <div class="audio-item">
            <h3 class="audio-title">AV-Mamba-I-Roberta</h3>
            <audio controls>
              <source src="/output_audio/guidance/avmamba-i.wav" type="audio/wav">
            </audio>
          </div>
         <div class="audio-item">
            <h3 class="audio-title">AV-Mamba-M-Roberta</h3>
            <audio controls>
              <source src="/output_audio/guidance/avmamba-m.wav" type="audio/wav">
            </audio>
          </div>
          <div class="audio-item">
            <h3 class="audio-title">AV-Mamba-O-Roberta</h3>
            <audio controls>
              <source src="/output_audio/guidance/avmamba-o.wav" type="audio/wav">
            </audio>
          </div>
         
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
         
          <div class="audio-item">
            <h3 class="audio-title">USEV-I-Qwen0.6b (sample1)</h3>
            <audio controls>
              <source src="/output_audio/llm/sample1/USEV-I-qwen06b.wav" type="audio/wav">
            </audio>
          </div>
         
          <div class="audio-item">
            <h3 class="audio-title">USEV-I-Qwen4b (sample1)</h3>
            <audio controls>
              <source src="/output_audio/llm/sample1/USEV-I-qwen4b.wav" type="audio/wav">
            </audio>
          </div>

         <div class="audio-item">
            <h3 class="audio-title">USEV (sample2)</h3>
            <audio controls>
              <source src="/output_audio/llm/sample2/USEV.wav" type="audio/wav">
            </audio>
          </div>

          <div class="audio-item">
            <h3 class="audio-title">USEV-I-Roberta (sample2)</h3>
            <audio controls>
              <source src="/output_audio/llm/sample2/USEV-I-Roberta.wav" type="audio/wav">
            </audio>
          </div>
         
          <div class="audio-item">
            <h3 class="audio-title">USEV-I-Qwen0.6b (sample2)</h3>
            <audio controls>
              <source src="/output_audio/llm/sample2/USEV-I-qwen06b.wav" type="audio/wav">
            </audio>
          </div>
         
          <div class="audio-item">
            <h3 class="audio-title">USEV-I-Qwen4b (sample2)</h3>
            <audio controls>
              <source src="/output_audio/llm/sample2/USEV-I-qwen4b.wav" type="audio/wav">
            </audio>
          </div>
         
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
            <h3 class="audio-title">USEV-FR</h3>
            <audio controls>
              <source src="/output_audio/crosslingual/USEV-FR.wav" type="audio/wav">
            </audio>
          </div>

          <div class="audio-item">
            <h3 class="audio-title">USEV-I-FR</h3>
            <audio controls>
              <source src="/output_audio/crosslingual/USEV-I-FR.wav" type="audio/wav">
            </audio>
          </div>

           <div class="audio-item">
            <h3 class="audio-title">FR-Mixture</h3>
            <audio controls>
              <source src="/output_audio/crosslingual/FR-mix.wav" type="audio/wav">
            </audio>
          </div>

         <div class="audio-item">
            <h3 class="audio-title">FR-GT</h3>
            <audio controls>
              <source src="/output_audio/crosslingual/FR_tgt.wav" type="audio/wav">
            </audio>
          </div>

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

           <div class="audio-item">
            <h3 class="audio-title">PT-Mixture</h3>
            <audio controls>
              <source src="/output_audio/crosslingual/PT_mix.wav" type="audio/wav">
            </audio>
          </div>

         <div class="audio-item">
            <h3 class="audio-title">PT-GT</h3>
            <audio controls>
              <source src="/output_audio/crosslingual/PT_tgt.wav" type="audio/wav">
            </audio>
          </div>


          <div class="audio-item">
            <h3 class="audio-title">USEV-IT</h3>
            <audio controls>
              <source src="/output_audio/crosslingual/USEV-IT.wav" type="audio/wav">
            </audio>
          </div>

          <div class="audio-item">
            <h3 class="audio-title">USEV-I-IT</h3>
            <audio controls>
              <source src="/output_audio/crosslingual/USEV-I-IT.wav" type="audio/wav">
            </audio>
          </div>

           <div class="audio-item">
            <h3 class="audio-title">IT-Mixture</h3>
            <audio controls>
              <source src="/output_audio/crosslingual/IT_mix.wav" type="audio/wav">
            </audio>
          </div>

         <div class="audio-item">
            <h3 class="audio-title">IT-GT</h3>
            <audio controls>
              <source src="/output_audio/crosslingual/IT_tgt.wav" type="audio/wav">
            </audio>
          </div>


            <div class="audio-item">
            <h3 class="audio-title">USEV-ES</h3>
            <audio controls>
              <source src="/output_audio/crosslingual/USEV-ES.wav" type="audio/wav">
            </audio>
          </div>

          <div class="audio-item">
            <h3 class="audio-title">USEV-I-ES</h3>
            <audio controls>
              <source src="/output_audio/crosslingual/USEV-I-ES.wav" type="audio/wav">
            </audio>
          </div>

           <div class="audio-item">
            <h3 class="audio-title">ES-Mixture</h3>
            <audio controls>
              <source src="/output_audio/crosslingual/ES_mix.wav" type="audio/wav">
            </audio>
          </div>

         <div class="audio-item">
            <h3 class="audio-title">ES-GT</h3>
            <audio controls>
              <source src="/output_audio/crosslingual/ES_tgt.wav" type="audio/wav">
            </audio>
          </div>

 
      
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped>
/* 基础样式保留 */
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

/* 关键修改 - 多列布局 */
.audio-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 强制4列 */
  gap: 1rem;
  margin-top: 1.5rem;
}

/* 紧凑音频项 */
.audio-item {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 0.8rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

/* 强制缩小音频控制条 */
.audio-item audio {
  width: 100% !important;
  height: 30px !important;
  min-width: 0; /* 重要：允许缩小 */
}

/* 标题样式 */
.audio-item h3 {
  margin: 0 0 0.5rem 0;
  font-size: 0.95rem;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 响应式调整 */
@media (max-width: 1200px) {
  .audio-grid {
    grid-template-columns: repeat(3, 1fr); /* 中屏幕3列 */
  }
}

@media (max-width: 768px) {
  .audio-grid {
    grid-template-columns: repeat(2, 1fr); /* 小屏幕2列 */
  }
  
  .audio-item audio {
    height: 28px !important;
  }
}

@media (max-width: 480px) {
  .audio-grid {
    grid-template-columns: 1fr; /* 超小屏幕1列 */
  }
}
</style>




