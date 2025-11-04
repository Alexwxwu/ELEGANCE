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
          <h3>USEV</h3>
          <video 
            controls 
            width="100%"
            :src="getMediaPath('ELEGNACE/public/output_video/usev-switch/usev-est.mp4')"
            type="video/mp4"
            @error="handleMediaError"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </el-col>
      
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <div class="media-item">
          <h3>USEV-M-Roberta</h3>
          <video 
            controls 
            width="100%"
            :src="getMediaPath('ELEGNACE/public/output_video/usev-switch/usev-m-est.mp4')"
            type="video/mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </el-col>
      
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <div class="media-item">
          <h3>Mixture</h3>
          <audio controls :src="getMediaPath('ELEGNACE/public/output_video/usev-switch/mix.wav')">
            Your browser does not support the audio element.
          </audio>
        </div>
      </el-col>
      
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <div class="media-item">
          <h3>GT</h3>
          <audio controls :src="getMediaPath('ELEGNACE/public/output_video/usev-switch/tgt.wav')">
            Your browser does not support the audio element.
          </audio>
        </div>
      </el-col>

      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <div class="media-item">
          <h3>AV-Mamba</h3>
          <video 
            controls 
            width="100%"
            :src="getMediaPath('ELEGNACE/public/output_video/avmamba-switch/avmamba-est.mp4')"
            type="video/mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </el-col>
      
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <div class="media-item">
          <h3>AV-Mamba-I-Roberta</h3>
          <video 
            controls 
            width="100%"
            :src="getMediaPath('ELEGNACE/public/output_video/avmamba-switch/avmamba-i-est.mp4')"
            type="video/mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </el-col>
      
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <div class="media-item">
          <h3>Mixture</h3>
          <audio controls :src="getMediaPath('ELEGNACE/public/output_audio/avmamba-switch/mix.wav')">
            Your browser does not support the audio element.
          </audio>
        </div>
      </el-col>
      
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <div class="media-item">
          <h3>GT</h3>
          <audio controls :src="getMediaPath('ELEGNACE/public/output_audio/avmamba-switch/tgt.wav')">
            Your browser does not support the audio element.
          </audio>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'MediaPlayer',
  methods: {
    /**
     * 统一处理媒体资源路径
     * @param {string} relativePath 相对路径如 'output_video/usev-switch/usev-est.mp4'
     * @returns {string} 完整资源路径
     */
    getMediaPath(relativePath) {
      // 方案1：直接使用绝对路径（需确保服务器配置正确）
      return `/${relativePath}`;
      
      /* 
      // 方案2：动态base路径（推荐）
      const isElegancePath = window.location.pathname.includes('ELEGANCE');
      return isElegancePath 
        ? `/ELEGANCE/${relativePath}`
        : `/${relativePath}`;
      */
      
      /*
      // 方案3：使用环境变量（最灵活）
      const base = import.meta.env.VITE_MEDIA_BASE || '';
      return `${base}/${relativePath}`.replace(/\/+/g, '/');
      */
    },
    
    /**
     * 处理媒体加载错误
     * @param {Event} event 错误事件
     */
    handleMediaError(event) {
      console.error('媒体加载失败:', {
        element: event.target.tagName,
        src: event.target.src,
        error: event.target.error
      });
      
      // 可选：显示错误提示
      this.$message.error(`${event.target.tagName}加载失败: ${event.target.error?.message || '未知错误'}`);
    }
  },
  
  mounted() {
    // 调试用：打印所有媒体路径
    const mediaElements = this.$el.querySelectorAll('video, audio');
    mediaElements.forEach(el => {
      console.log(`Media Debug: ${el.tagName} src =`, el.src);
    });
  }
}
</script>

<style scoped>
/* 保持原有样式不变 */
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
