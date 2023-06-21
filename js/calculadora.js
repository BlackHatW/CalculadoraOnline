const ans = document.querySelector(".ans");
const currentOperandText = document.querySelector(".currentOperand");
const operands = document.querySelectorAll(".operands");
const numbers = document.querySelectorAll(".numbers");
const equals = document.querySelector(".operands-equals");
const allClearButton = document.querySelector(".data-all-clear");
let memoria = new Array();
let DEG = "Rad"; // Variável para armazenar o estado da medida Radianos/Graus


function fatorial(n) {
  if (n === 0) {
    return 1;
  }
  let result = n;
  for (let i = 1; i < n; i++) {
    result *= n - i;
  }
  return result;
}

function calcularExpressao(expressao) {
  const expressaoGlobal = expressao;
  const regexNumerosOperadores = /-?\d+(?:\.\d+)?|[+\-*%^()]/g;
  expressao = expressao.replace(/π/g, Math.PI);
  expressao = expressao.replace(/e/g, Math.E);
  expressao = expressao.replace(/x/g, "*");
  expressao = expressao.replace(/÷/g, "/");
  expressao = expressao.replace(/E/g,'*10**');
  expressao = expressao.replace(/Ans/g, memoria[memoria.length-1]);

  while(expressao.includes("^")){
     expressao = expressao.replace("^", "**");
  }
 
  let result = undefined;

  if (regexNumerosOperadores.test(expressao)) {
    if (expressao.includes("%")) {
      let n = expressao.split("%");
      result = (parseFloat(n[0]) / 100) * parseFloat(n[1]);
      return result;
    }

    try {
      result = eval(expressao);
    } catch (error) {
      result = "Erro de Expressão!";
      return result;
    }
  } else {
    result = "Erro de Expressão!";
    return result;
  }

  return result;
}

for (const numberButton of numbers) {
  numberButton.addEventListener("click", () => {
    let str = currentOperandText.innerText;
    str = str.substring(str.length - 1);

    if (numberButton.innerText == ".") {
      if (str.includes(".")) {
        return;
      } else {
        currentOperandText.innerText += numberButton.innerText;
      }
    } else {
      currentOperandText.innerText += numberButton.innerText;
    }
  });
}

for (const operationButton of operands) {
  operationButton.addEventListener("click", () => {
    let strCompleta = currentOperandText.innerText.trim();
    let str = strCompleta.substring(strCompleta.length - 1);
    let btn = operationButton.innerText;

    switch (btn) {
      case "x":
      case "÷":
      case "+":
      case "-":
      case "π":
      case "e":
        if (str.includes(btn)) {
          return;
        } else {
          currentOperandText.innerHTML += ` ${operationButton.innerText}&nbsp;`;
        }
        break;
      case "sin":
        if (strCompleta != "") {
          let rad = parseFloat(strCompleta); // Valor em radianos
          if (DEG == "Deg") {
            rad = parseFloat(strCompleta) * (Math.PI / 180); // converte o Valor de Graus para Radianos Novamente
          } // Math.js só trabalha com valores radianos
          currentOperandText.innerHTML = `${Math.sin(rad)}`;
          memoria.push(currentOperandText.innerText);
        }
        break;
      case "cos":
        if (strCompleta != "") {
          let rad = parseFloat(strCompleta); // Valor em radianos
          if (DEG == "Deg") {
            rad = parseFloat(strCompleta) * (Math.PI / 180); // converte o Valor de Graus para Radianos Novamente
          } // Math.js só trabalha com valores radianos
          currentOperandText.innerHTML = `${Math.cos(rad)}`;
          memoria.push(currentOperandText.innerText);
        }
        break;
      case "tan":
        if (strCompleta != "") {
          let rad = parseFloat(strCompleta); // Valor em radianos
          if (DEG == "Deg") {
            rad = parseFloat(strCompleta) * (Math.PI / 180); // converte o Valor de Graus para Radianos Novamente
          } // Math.js só trabalha com valores radianos
          currentOperandText.innerHTML = `${Math.tan(rad)}`;
          memoria.push(currentOperandText.innerText);
        }
        break;
      case "In":
        if (strCompleta != "") {
          currentOperandText.innerHTML = `${Math.log(parseFloat(strCompleta))}`;
          memoria.push(currentOperandText.innerText);
        }
        break;
      case "log":
        if (strCompleta != "") {
          currentOperandText.innerHTML = `${Math.log10(parseFloat(strCompleta))}`;
          memoria.push(currentOperandText.innerText);
        }
        break;
      case "√":
        if (strCompleta != "") {
          currentOperandText.innerHTML = `${Math.sqrt(parseFloat(strCompleta))}`;
          memoria.push(currentOperandText.innerText);
        }
        break;
      case "Deg":
        DEG = "Deg";
        let deg = document.querySelector(".deg");
        deg.style = "background-color: rgba(130, 30, 120, 0.5);";
        document.querySelector(".rad").style =
          "background-color: rgba(255, 122, 0, 1);";
        break;
      case "Rad":
        DEG = "Rad";
        let rad = document.querySelector(".rad");
        rad.style = "background-color: rgba(130, 30, 120, 0.5);";
        document.querySelector(".deg").style =
          "background-color: rgba(255, 122, 0, 1);";
        break;
      case "x!":
        if (strCompleta != "") {
          currentOperandText.innerHTML = `${fatorial(parseFloat(strCompleta))}`;
          memoria.push(currentOperandText.innerText);
        }
        break;
      case "xy":
        currentOperandText.innerHTML += `^&nbsp;`;
        break;
      case "(":
        currentOperandText.innerHTML += `(`;
        break;
      case ")":
        currentOperandText.innerHTML += `)&nbsp;`;
        break;
      case "%":
        if (str.includes(btn)) {
          return;
        } else {
          currentOperandText.innerHTML += ` ${operationButton.innerText}&nbsp;`;
        }
        break;
      case "EXP":
        if (str.includes('E') || str == "" || isNaN(str)) {
          return;
        } else {
          currentOperandText.innerHTML += `E`;
        }
        break;
      case "Ans":
        if (strCompleta.includes("Ans")) {
          currentOperandText.innerHTML += ` x Ans`;
        } else {
          currentOperandText.innerHTML += `Ans`;
        }
    }
  });
}

allClearButton.addEventListener("click", () => {
  if (allClearButton.innerText == "AC") {
    currentOperandText.innerText = "";
    allClearButton.innerText = "CE";
  } else {
    let str = currentOperandText.innerText.toString();
    str = str.substring(0, str.length - 1);
    currentOperandText.innerText = str;
  }
});

equals.addEventListener("click", () => {
  allClearButton.innerText = "AC";
  let expressao = currentOperandText.innerText.toString().trim();
  if (expressao != "") {
    let resultado = calcularExpressao(expressao);
    currentOperandText.innerText = resultado.toString();
    memoria.push(resultado);
  }
});
