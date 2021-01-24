# Audio and Video

***HTML5 comes with elements for embedding rich media in documents — `<video>` and `<audio>` — which in turn come with their own APIs for controlling playback, seeking, etc. This article shows you how to do common tasks such as creating custom playback controls.***

* The easiest way to add a video to your site is to upload the video to a site like YouTube or Vimeo and use the features provided on their site to embed the video in your page.

* The HTMLMediaElement API provides features to allow you to control video and audio players programmatically. 
* `HTMLMediaElement.play()`, `HTMLMediaElement.pause()` are available to both `<audio>` and `<video>` elements, as the features you'll want to implement are nearly identical. 

* The `<video>` element has a number of attributes which allow you to control video playback:

    * `src`
This attribute specifies the path to the video. (The example video is in H264 format so it will only work in IE and Safari.)

    * `poster`
This attribute allows you to specify an image to show while the video is downloading or until the user tells the video to play.

    * `width, height`
These attributes specify the size of the player in pixels.

    * `controls`
When used, this attribute indicates that the browser should supply its own controls for playback.

    * `autoplay`
When used, this attribute specifies that the file should play automatically.

    * `loop`
When used, this attribute indicates that the video should start playing again once it has ended.

`<audio>`
* HTML5 introduced the `<audio>` element to include audio files in your pages. As with HTML5 video, browsers expect different formats for the audio.

* The `<audio>` element has a number of attributes which allow you to control audio playback:
    * `src`
This attribute specifies the path to the audio file.
    * `controls`
This attribute indicates whether the player should display controls. If you do not use this attribute, no controls will be shown by default. You can also specify your own controls using JavaScript.
    * `autoplay`
The presence of this attribute indicates that the audio should start playing automatically. (It is considered better practice to let visitors choose to play audio.)

--- 

# Images

### Adding images to your page will make it more dynamic and engaging. They should be relevant, convey information, add the right mood and fit the color palette.

* Store local images in an 'images' folder.

* Add images using the `<img>` tag and inside the `>` to indicate the source `src=" "` , alt (which is a caption that appears if the image doesn't load) `alt` and `title` for screen readers to recognize the image.

* You will need to size your images before loading them into the page or add width and height measurements either in CSS or within the `<img>` tag.

* Be sure to save images in the right format, either .png or .jpg and if the color looks wierd on screen, the color profile may not be set to sRGB.

---


[Back to Read Me](../README.md)