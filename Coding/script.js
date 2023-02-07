
var _inputArea;
var _input;
var _submit;
var _reset;
var _output;
var _clearOutputButton;
var _lastInputId = 0;
var _inputs = [];

function _getNewInputId() {
    _lastInputId += 1;
    return "input-" + _lastInputId;
}

function _init() {
    _inputArea = document.getElementById("input-area");
    _inputArea.style.display = "none";

    _input = document.getElementById("input");

    _submit = document.createElement("input");
    _submit.setAttribute("type", "submit");
    _submit.setAttribute("value", "Executar");

    _reset = document.createElement("input");
    _reset.setAttribute("type", "reset");
    _reset.setAttribute("value", "Limpar campos");
    _reset.style.marginLeft = "10px";

    _output = document.getElementById("output");

    _clearOutputButton = document.getElementById("clear-output-button");
    _clearOutputButton.style.display = "none";

    meuCodigo()
}

function _writeToOutput(content) {
    const li = document.createElement("li");
    li.textContent = content;
    _output.appendChild(li);
    _clearOutputButton.style.display = "inline";
}

function _onInputSubmit() {
    var inputs = [];
    for (let input of _inputs) {
        if (input.type == "text") {
            inputs.push(input.input.value);
        } else if (input.type == "number") {
            inputs.push(parseFloat(input.input.value));
        } else {
            inputs.push(input.input.checked);
        }
        
    }
    recebeEntradas(inputs);
    return false
}

function _clearOutput() {
    _output.innerHTML = "";
    _clearOutputButton.style.display = "none";
}

function _addInput(type, label, placeholder, value, required = true) {
    const inputId = _getNewInputId();

    const labelElement = document.createElement("label");
    labelElement.textContent = label;
    labelElement.setAttribute("for", inputId)

    const inputElement = document.createElement("input");
    inputElement.setAttribute("type", type);
    inputElement.setAttribute("id", inputId);
    inputElement.setAttribute("placeholder", placeholder);
    inputElement.value = value;
    inputElement.required = required;

    _input.appendChild(labelElement);
    _input.appendChild(inputElement);
    _input.appendChild(document.createElement("br"));
    _input.appendChild(document.createElement("br"));
    
    if (_inputs.length > 0) { 
        _input.removeChild(_submit); 
        _input.removeChild(_reset);
    }
    _input.appendChild(_submit);
    _input.appendChild(_reset);

    _inputArea.style.display = "block";

    return inputElement;
}

function escreveNaTela(conteudo) {
    _writeToOutput(conteudo);
}

function criarEntradaDeTexto(nome, dica, conteudo = null) {
    const input = _addInput("text", nome, dica, conteudo);
    _inputs.push({ type: "text", input: input});
}

function criarEntradaDeNumero(nome, dica, conteudo = null) {
    const input = _addInput("number", nome, dica, conteudo);
    input.setAttribute("step", 0.01)
    _inputs.push({ type: "number", input: input});
}

function criarEntradaBooleana(nome, selecionado = false) {
    const input = _addInput("checkbox", nome, null, null, false);
    input.checked = selecionado;
    _inputs.push({ type: "checkbox", input: input });
}

