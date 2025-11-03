<template>
  <div>
    <el-divider />
    
    <el-row justify="center">
      <h1 class="section-title">Target Speaker Switches</h1>
    </el-row>
    
    <!-- 视频展示部分 -->
    <el-row justify="center" class="video-row">
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <div class="media-item">
          <h3>USEV Switch</h3>
          <video controls width="100%">
            <source src="/ELEGANCE/output_video/usev-switch.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </el-col>
      
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <div class="media-item">
          <h3>USEV LLM Switch</h3>
          <video controls width="100%">
            <source src="/ELEGANCE/output_video/usev-llm-switch.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </el-col>
      
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <div class="media-item">
          <h3>AVMamba Switch</h3>
          <video controls width="100%">
            <source src="/ELEGANCE/output_video/avmamba-switch.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </el-col>
      
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <div class="media-item">
          <h3>AVMamba LLM Switch</h3>
          <video controls width="100%">
            <source src="/ELEGANCE/output_video/avmamba-llm-switch.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </el-col>
    </el-row>
    
    <!-- 音频展示部分 -->
    <el-row justify="center" class="audio-row">
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <div class="media-item">
          <h3>USEV Mix</h3>
          <audio controls>
            <source src="/ELEGANCE/output_audio/usev-mix.wav" type="audio/wav">
            Your browser does not support the audio element.
          </audio>
        </div>
      </el-col>
      
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <div class="media-item">
          <h3>USEV GT</h3>
          <audio controls>
            <source src="/ELEGANCE/output_audio/usev-gt.wav" type="audio/wav">
            Your browser does not support the audio element.
          </audio>
        </div>
      </el-col>
      
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <div class="media-item">
          <h3>AVMamba Mix</h3>
          <audio controls>
            <source src="/ELEGANCE/output_audio/avmamba-mix.wav" type="audio/wav">
            Your browser does not support the audio element.
          </audio>
        </div>
      </el-col>
      
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <div class="media-item">
          <h3>AVMamba GT</h3>
          <audio controls>
            <source src="/ELEGANCE/output_audio/avmamba-gt.wav" type="audio/wav">
            Your browser does not support the audio element.
          </audio>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'MediaPlayer'
}
</script>

<style scoped>
.section-title {
  text-align: center;
  margin: 20px 0;
  color: #303133;
}

.video-row,
.audio-row {
  margin-bottom: 30px;
}

.media-item {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
  margin: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.media-item h3 {
  text-align: center;
  margin-bottom: 15px;
  color: #409eff;
}

.media-item video,
.media-item audio {
  width: 100%;
  border-radius: 4px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .video-row,
  .audio-row {
    flex-direction: column;
  }
  
  .media-item {
    margin-bottom: 20px;
  }
}
</style>
