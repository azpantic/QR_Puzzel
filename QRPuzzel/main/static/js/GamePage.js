var picture = new Map([["place_piece_1","1"], ["place_piece_2","2"], ["place_piece_3","3"],
                ["place_piece_4","4"], ["place_piece_5","5"], ["place_piece_6","6"],
                ["place_piece_7","7"], ["place_piece_8","8"], ["place_piece_9","9"], ])

document.addEventListener("click", function(div) {
  if (div.target.className=="place_piece") {
      var id_place = div.target.id;
      var checked = 0;
      var radio = document.getElementsByClassName('piece_up');
      for(var i = 0; i < radio.length; i++){
          if(radio[i].checked){
              checked = radio[i];
          }
      }
      document.getElementById(checked.id).checked = false;
      document.getElementById(checked.id).disabled = true;
      div.target.appendChild(document.getElementById(checked.id).parentElement);

      picture.set(id_place, checked.id);
  }

  if (div.target.parentElement.parentElement.parentElement.className=="puzzle-field"){
      div.target.parentElement.querySelector('.piece_up').disabled = false;
      document.getElementById('puzzle-pieces').appendChild(div.target.parentElement);
      var id_place = div.target.parentElement.parentElement.id
      picture.set(id_place, '0');
  }

  // if(div.target.className=="main" || div.target.className=="text" || div.target.className=="puzzle-subtitle"){
  //     var radio = document.getElementsByClassName('piece_up');
  //     for(var i = 0; i < radio.length; i++){
  //         radio[i].checked = false;
  //         console.log(1);
  //     }
  // }

});