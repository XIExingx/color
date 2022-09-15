$(document).ready(function() {
  convert = (hex) => {
      hex = parseInput(hex);
      hex = hex.map(val => parseInt(val, 16)).toString();
    
      if (hex.includes(NaN)) {
        return throwInvalid();
      }

      return `rgb(${hex})`;
  }

  parseInput = (hex) => {
      hex = hex.trim().replace(/#/g, "");

      if (hex.length === 3) {
          hex = hex
              .split("")
              .map(val => `${val}${val}`)
              .join("");
      }
    
      // TODO: add alpha logic if hex.length === 8

      return hex.match(/.{1,2}/g);
  }

  throwInvalid = () => {
    return `Invalid hex!`;
  }
  
  $("button").on("click", function(){
    let hex = $( "input" ).val();
    let rgba = convert(hex);
    $("#result").html(`<p>${rgba}</p>`);
    $('.bg-container').css('background', rgba);
  });
})