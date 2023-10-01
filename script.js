function go1() {
  try {
    var enter = document.getElementById("day").value;

    var sign1 = document.getElementById("aries").value;

    const URL = `https://aztro.sameerkumar.website/?sign=${sign1}&day=${enter}`;

    fetch(URL, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => {
        const date = json.current_date;
        document.getElementById("cdate").value = date;

        const lnumber = json.lucky_number;
        document.getElementById("lnumber").value = lnumber;

        const compa = json.compatibility;
        document.getElementById("compa").value = compa;

        const ltime = json.lucky_time;
        document.getElementById("ltime").value = ltime;

        const colour = json.color;
        document.getElementById("col").value = colour;

        const mood = json.mood;
        document.getElementById("moo").value = mood;

        const dis = json.description;
        document.getElementById("des").value = dis;
      });
  } catch (error) {
    console.log(error);
  }
}

function go2() {
  try {
    var enter = document.getElementById("day").value;

    var sign2 = document.getElementById("taurus").value;

    const URL = `https://aztro.sameerkumar.website/?sign=${sign2}&day=${enter}`;

    fetch(URL, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => {
        const date = json.current_date;
        document.getElementById("cdate").value = date;

        const lnumber = json.lucky_number;
        document.getElementById("lnumber").value = lnumber;

        const compa = json.compatibility;
        document.getElementById("compa").value = compa;

        const ltime = json.lucky_time;
        document.getElementById("ltime").value = ltime;

        const colour = json.color;
        document.getElementById("col").value = colour;

        const mood = json.mood;
        document.getElementById("moo").value = mood;

        const dis = json.description;
        document.getElementById("des").value = dis;
      });
  } catch (error) {
    console.log(error);
  }
}

function go3() {
  try {
    var enter = document.getElementById("day").value;

    var sign3 = document.getElementById("gemini").value;

    const URL = `https://aztro.sameerkumar.website/?sign=${sign3}&day=${enter}`;

    fetch(URL, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => {
        const date = json.current_date;
        document.getElementById("cdate").value = date;

        const lnumber = json.lucky_number;
        document.getElementById("lnumber").value = lnumber;

        const compa = json.compatibility;
        document.getElementById("compa").value = compa;

        const ltime = json.lucky_time;
        document.getElementById("ltime").value = ltime;

        const colour = json.color;
        document.getElementById("col").value = colour;

        const mood = json.mood;
        document.getElementById("moo").value = mood;

        const dis = json.description;
        document.getElementById("des").value = dis;
      });
  } catch (error) {
    console.log(error);
  }
}

function go4() {
  try {
    var enter = document.getElementById("day").value;

    var sign4 = document.getElementById("cancer").value;

    const URL = `https://aztro.sameerkumar.website/?sign=${sign4}&day=${enter}`;

    fetch(URL, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => {
        const date = json.current_date;
        document.getElementById("cdate").value = date;

        const lnumber = json.lucky_number;
        document.getElementById("lnumber").value = lnumber;

        const compa = json.compatibility;
        document.getElementById("compa").value = compa;

        const ltime = json.lucky_time;
        document.getElementById("ltime").value = ltime;

        const colour = json.color;
        document.getElementById("col").value = colour;

        const mood = json.mood;
        document.getElementById("moo").value = mood;

        const dis = json.description;
        document.getElementById("des").value = dis;
      });
  } catch (error) {
    console.log(error);
  }
}

function go5() {
  try {
    var enter = document.getElementById("day").value;

    var sign5 = document.getElementById("leo").value;

    const URL = `https://aztro.sameerkumar.website/?sign=${sign5}&day=${enter}`;

    fetch(URL, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => {
        const date = json.current_date;
        document.getElementById("cdate").value = date;

        const lnumber = json.lucky_number;
        document.getElementById("lnumber").value = lnumber;

        const compa = json.compatibility;
        document.getElementById("compa").value = compa;

        const ltime = json.lucky_time;
        document.getElementById("ltime").value = ltime;

        const colour = json.color;
        document.getElementById("col").value = colour;

        const mood = json.mood;
        document.getElementById("moo").value = mood;

        const dis = json.description;
        document.getElementById("des").value = dis;
      });
  } catch (error) {
    console.log(error);
  }
}

function go6() {
  try {
    var enter = document.getElementById("day").value;

    var sign6 = document.getElementById("virgo").value;

    const URL = `https://aztro.sameerkumar.website/?sign=${sign6}&day=${enter}`;

    fetch(URL, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => {
        const date = json.current_date;
        document.getElementById("cdate").value = date;

        const lnumber = json.lucky_number;
        document.getElementById("lnumber").value = lnumber;

        const compa = json.compatibility;
        document.getElementById("compa").value = compa;

        const ltime = json.lucky_time;
        document.getElementById("ltime").value = ltime;

        const colour = json.color;
        document.getElementById("col").value = colour;

        const mood = json.mood;
        document.getElementById("moo").value = mood;

        const dis = json.description;
        document.getElementById("des").value = dis;
      });
  } catch (error) {
    console.log(error);
  }
}

function go7() {
  try {
    var enter = document.getElementById("day").value;

    var sign7 = document.getElementById("libra").value;

    const URL = `https://aztro.sameerkumar.website/?sign=${sign7}&day=${enter}`;

    fetch(URL, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => {
        const date = json.current_date;
        document.getElementById("cdate").value = date;

        const lnumber = json.lucky_number;
        document.getElementById("lnumber").value = lnumber;

        const compa = json.compatibility;
        document.getElementById("compa").value = compa;

        const ltime = json.lucky_time;
        document.getElementById("ltime").value = ltime;

        const colour = json.color;
        document.getElementById("col").value = colour;

        const mood = json.mood;
        document.getElementById("moo").value = mood;

        const dis = json.description;
        document.getElementById("des").value = dis;
      });
  } catch (error) {
    console.log(error);
  }
}

function go8() {
  try {
    var enter = document.getElementById("day").value;

    var sign8 = document.getElementById("scorpio").value;

    const URL = `https://aztro.sameerkumar.website/?sign=${sign8}&day=${enter}`;

    fetch(URL, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => {
        const date = json.current_date;
        document.getElementById("cdate").value = date;

        const lnumber = json.lucky_number;
        document.getElementById("lnumber").value = lnumber;

        const compa = json.compatibility;
        document.getElementById("compa").value = compa;

        const ltime = json.lucky_time;
        document.getElementById("ltime").value = ltime;

        const colour = json.color;
        document.getElementById("col").value = colour;

        const mood = json.mood;
        document.getElementById("moo").value = mood;

        const dis = json.description;
        document.getElementById("des").value = dis;
      });
  } catch (error) {
    console.log(error);
  }
}

function go9() {
  try {
    var enter = document.getElementById("day").value;

    var sign9 = document.getElementById("sagittarius").value;

    const URL = `https://aztro.sameerkumar.website/?sign=${sign9}&day=${enter}`;

    fetch(URL, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => {
        const date = json.current_date;
        document.getElementById("cdate").value = date;

        const lnumber = json.lucky_number;
        document.getElementById("lnumber").value = lnumber;

        const compa = json.compatibility;
        document.getElementById("compa").value = compa;

        const ltime = json.lucky_time;
        document.getElementById("ltime").value = ltime;

        const colour = json.color;
        document.getElementById("col").value = colour;

        const mood = json.mood;
        document.getElementById("moo").value = mood;

        const dis = json.description;
        document.getElementById("des").value = dis;
      });
  } catch (error) {
    console.log(error);
  }
}

function go10() {
  try {
    var enter = document.getElementById("day").value;

    var sign10 = document.getElementById("capricorn").value;

    const URL = `https://aztro.sameerkumar.website/?sign=${sign10}&day=${enter}`;

    fetch(URL, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => {
        const date = json.current_date;
        document.getElementById("cdate").value = date;

        const lnumber = json.lucky_number;
        document.getElementById("lnumber").value = lnumber;

        const compa = json.compatibility;
        document.getElementById("compa").value = compa;

        const ltime = json.lucky_time;
        document.getElementById("ltime").value = ltime;

        const colour = json.color;
        document.getElementById("col").value = colour;

        const mood = json.mood;
        document.getElementById("moo").value = mood;

        const dis = json.description;
        document.getElementById("des").value = dis;
      });
  } catch (error) {
    console.log(error);
  }
}

function go11() {
  try {
    var enter = document.getElementById("day").value;

    var sign11 = document.getElementById("aquarius").value;

    const URL = `https://aztro.sameerkumar.website/?sign=${sign11}&day=${enter}`;

    fetch(URL, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => {
        const date = json.current_date;
        document.getElementById("cdate").value = date;

        const lnumber = json.lucky_number;
        document.getElementById("lnumber").value = lnumber;

        const compa = json.compatibility;
        document.getElementById("compa").value = compa;

        const ltime = json.lucky_time;
        document.getElementById("ltime").value = ltime;

        const colour = json.color;
        document.getElementById("col").value = colour;

        const mood = json.mood;
        document.getElementById("moo").value = mood;

        const dis = json.description;
        document.getElementById("des").value = dis;
      });
  } catch (error) {
    console.log(error);
  }
}

function go12() {
  try {
    var enter = document.getElementById("day").value;

    var sign12 = document.getElementById("pisces").value;

    const URL = `https://aztro.sameerkumar.website/?sign=${sign12}&day=${enter}`;

    fetch(URL, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => {
        const date = json.current_date;
        document.getElementById("cdate").value = date;

        const lnumber = json.lucky_number;
        document.getElementById("lnumber").value = lnumber;

        const compa = json.compatibility;
        document.getElementById("compa").value = compa;

        const ltime = json.lucky_time;
        document.getElementById("ltime").value = ltime;

        const colour = json.color;
        document.getElementById("col").value = colour;

        const mood = json.mood;
        document.getElementById("moo").value = mood;

        const dis = json.description;
        document.getElementById("des").value = dis;
      });
  } catch (error) {
    console.log(error);
  }
}
