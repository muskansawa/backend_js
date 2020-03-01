$.getJSON(
  "https://api.unsplash.com/users/muskaansawa/likes/?client_id=v-6UIIReLdCiMQTEkb_SPeQt6Wtmc-SCXxa3561l88w",
  function(data) {
    console.log(data);

    $.each(data, function(index, value) {
      console.log(value);

      var name = value.user.name;
      console.log(name);
      var bio = value.user.bio;
      console.log(bio);
      var imageURL = value.urls.regular;
      console.log(imageURL);

      //$(".name").text(name);
      // $(".bio").text(bio);
      //$(".image img").attr('src',imageURL);

      $(".output").append(
        '<h1 class="name">' +
          name +
          '</h1><h2 class="bio">' +
          bio +
          '</h2><div class="image"><img src="' +
          imageURL +
          '"/></div>'
      );
    });
  }
);

//mango=ihinFK9P6_PtjJJC8yvVXJAy2C2N3Hch6s5QTZ3AHEQ
//banana=H0zYhnWMOSdUELYcgvYh2nAs5PxE5WTSUxkeeG94Ksk
//GRAPES=b8JF80R4qx9eIfPWIcTs-M5vHFOjPFjERz7t95ZRwD4
//hoja=v-6UIIReLdCiMQTEkb_SPeQt6Wtmc-SCXxa3561l88w
//https://www.google.com/search?q=how+to+implement+api+in+web+app&oq=how+to+implement+api+in+web+app&aqs=chrome..69i57j0l7.13253j0j7&sourceid=chrome&ie=UTF-8#kpvalbx=_rsRXXr6ADJXHrQGgjYTgBg40
