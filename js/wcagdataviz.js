$(document).ready(function () {
  submitQuiz();

  $(".quiz-options input[type='radio']").keypress(function(e) {
    const code = (e.keyCode ? e.keyCode : e.which);
    if(code == 13) { //Enter keycode
      selectRadio(this);
    }
  });

  $(".quiz-options input[type='radio']").on("click", function () {
    selectRadio(this);
  });

  $("#types-dataviz-radios input[type='radio']").keypress(function(e) {
    const code = (e.keyCode ? e.keyCode : e.which);
    if(code == 13) { //Enter keycode
      selectRadio(this);
    }
  });

  $("#types-dataviz-radios input[type='radio']").on("click", function () {
    selectTypeDatavizRadio(this);
    calcTypes();
  });

  $("#types-dataviz-radios input[type='radio']").keypress(function(e) {
    const code = (e.keyCode ? e.keyCode : e.which);
    if(code == 13) { //Enter keycode
      selectTypeDatavizRadio(this);
      calcTypes();
    }
  });

  $("#wcag-dataviz-submit").keypress(function(e) {
    const code = (e.keyCode ? e.keyCode : e.which);
    if(code == 13) { //Enter keycode
      submitQuiz()
    }
  });

  $("#wcag-dataviz-submit").on("click", function () {
    submitQuiz();
  });
});

const calcTypes = () => {
  const typesDataviz = $("#types-dataviz-radios");
  let percent = 0;
  typesDataviz.find(`input[type="radio"]`).each(function () {
    if ($(this).is(":checked")) percent += parseFloat($(this).val());
  });
  $("#types-dataviz-base").empty();
  $("#types-dataviz-base").append(percent + "%");
  $("#types-dataviz-fill").animate({
    width: percent + "%"
  }, 400);
}

const selectRadio = (elem) => {
  const radioCont = $(elem).closest(".quiz-options");
  radioCont.find("input[type='radio']").prop("checked", false);
  $(elem).prop("checked", true);
}

const selectTypeDatavizRadio = (elem) => {
  const radioCont = $(elem).closest("#types-dataviz-radios");
  radioCont.find("input[type='radio']").prop("checked", false);
  $(elem).prop("checked", true);
}

const submitQuiz = () => {
  for (let i=0; i<4; i++) {
    $(`#wcag-dataviz-${i+1}-A`).empty();
    $(`#wcag-dataviz-${i+1}-AA`).empty();
  }
  $("#quiz").find("tr").each(function () {
    const className = $(this).attr("class");
    const classData = className.split("-");
    const principle = classData[1];
    const complianceLevel = classData[4];
    const sectionClass = `#wcag-dataviz-${principle}-${complianceLevel}`;
    const option = $(this).find("input[type='radio']:checked");
    const isCompliant = option.val();
    let cube;
    if (isCompliant === "yes") cube = `<div class="wcag-dataviz-cube yes"></div>`;
    else if (isCompliant === "no") cube = `<div class="wcag-dataviz-cube no"></div>`;
    else cube = `<div class="wcag-dataviz-cube unsure"></div>`;
    $(sectionClass).append(cube);
  });
}