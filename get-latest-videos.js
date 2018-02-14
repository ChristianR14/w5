function show_my_videos(data) {
	var html = ['<ul id="videos">'];
	$(data.items).each(function(index, item) {
	var desc = item.title,
        videoId  = item.snippet.resourceId.videoId;
		    
    // append HTML
   html.push('<iframe src="https://www.youtube.com/embed/' + videoId  + '?modestbranding=1&amp;rel=0&amp;autoplay=0"></iframe>'); });
	$("#videos").html(html.join(''));
}

var url =
  "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=PLfdtiltiRHWH9JN1NBpJRFUhN96KBfPmd&key=AIzaSyD3xURQiCedzpSK91gIrLBrnasIpUpIBJg";

$.ajax({
  url: url,
  dataType: "jsonp",
  success: function(data) {
    console.log(data);
    show_my_videos(data);
		
  }
});