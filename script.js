document.addEventListener("DOMContentLoaded", function () {
    var accordionItems = document.querySelectorAll('.accordion-item');
  
    accordionItems.forEach(function (item) {
      var checkbox = item.querySelector('input[type="checkbox"]');
      var content = item.querySelector('.accordion-content');
      var icon = item.querySelector('.accordion-icon');
  
      item.addEventListener('click', function () {
        accordionItems.forEach(function (otherItem) {
          var otherCheckbox = otherItem.querySelector('input[type="checkbox"]');
          var otherIcon = otherItem.querySelector('.accordion-icon');
          var otherContent = otherItem.querySelector('.accordion-content');
  
          if (otherItem !== item) {
            otherCheckbox.checked = false;
            otherContent.style.maxHeight = '0';
            otherIcon.innerText = '+';
          }
        });
  
        checkbox.checked = !checkbox.checked;
        content.style.maxHeight = checkbox.checked ? '1000px' : '0';
      });
    });
  });
  