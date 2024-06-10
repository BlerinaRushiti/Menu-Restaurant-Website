let app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    transparent: true
  });
  document.getElementById('video-container').appendChild(app.view);
  
  // Load video texture
  const videoPath = './assets/video/pizza-video.mp4'; // Replace with your video path
  const videoTexture = PIXI.Texture.from(videoPath);
  
  // Create a sprite from the video texture
  const videoSprite = new PIXI.Sprite(videoTexture);
  videoSprite.width = app.screen.width;
  videoSprite.height = app.screen.height;
  app.stage.addChild(videoSprite);
  
  // Apply a PIXI Old Film filter
  const oldFilmFilter = new PIXI.filters.OldFilmFilter({
    sepia: true,
    noise: 0.1,
    scratch: 0.1,
    scratchDensity: 0.3,
    vignetting: 0.3,
    vignettingAlpha: 0.3,
    vignettingBlur: 0.3
  });
  videoSprite.filters = [oldFilmFilter];
  
  // Autoplay the video
  videoTexture.baseTexture.resource.source.loop = true;
  videoTexture.baseTexture.resource.source.muted = true;
  videoTexture.baseTexture.resource.source.play();
  
  // Handle window resize
  window.addEventListener('resize', () => {
    app.renderer.resize(window.innerWidth, window.innerHeight);
    videoSprite.width = app.screen.width;
    videoSprite.height = app.screen.height;
  });
  

  