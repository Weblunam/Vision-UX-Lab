
let lastTabTime = 0;

window.addEventListener('DOMContentLoaded', () => {
  const posiblesInteractivos = document.querySelectorAll(
    'div, span, img, svg, button, a, li, p, h1, h2, h3, h4, h5, h6, input, textarea, select, details, summary, label, table, th, td, ul, ol, dl, dt, dd, iframe, video, audio, canvas, section, article, aside, nav, footer, header, main, figure, figcaption, blockquote, time, address, bdi, bdo, mark, ruby, rt, rp, wbr, abbr, data, datalist, output, progress, meter, dialog, template, track, caption, colgroup, col, tbody, thead, tfoot, tr, legend, fieldset'
  );

  posiblesInteractivos.forEach(el => {
    const tieneEvento = el.getAttribute('onclick') || el.getAttribute('onmousedown') || el.hasAttribute('data-click');
    if (tieneEvento && !el.hasAttribute('tabindex')) {
      el.setAttribute('tabindex', '0');
    }
  });

  const selectoresExtras = ['[role="button"]', '[role="link"]'];
  selectoresExtras.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      if (!el.hasAttribute('tabindex')) {
        el.setAttribute('tabindex', '0');
      }
    });
  });

  //estilo para el foco
  const style = document.createElement('style');
  style.innerHTML = `
    [tabindex]:focus {
      outline: 2px solidrgb(178, 229, 82);
      outline-offset: 2px;
      transition: outline 0.2s ease;
    }
  `;
  document.head.appendChild(style);
});


//cuando se presiona la tecla Tab
document.addEventListener("keydown", (evento) => {
  if (evento.key === "Tab") {
    lastTabTime = Date.now();
  }
});



document.addEventListener("focusin", (evento) => {
  const enfoqueSwitch = document.querySelector('#enfoqueSwitch');
  if (!enfoqueSwitch || !enfoqueSwitch.checked) return;
  
  
  const ahora = Date.now();
  const umbral = 150;
  if (ahora - lastTabTime > umbral) return;

  const elemento = evento.target;
  const descripcion = obtenerDescripcionElemento(elemento);

  //cancelar cualquier texto de voz pendiente
  window.speechSynthesis.cancel();

  if (descripcion.texto && descripcion.tipo) {
    const utter1 = new SpeechSynthesisUtterance(descripcion.texto);
    utter1.lang = "es-ES";

    utter1.onend = () => {// Esperar antes de leer el tipo
      setTimeout(() => {
        const utter2 = new SpeechSynthesisUtterance(descripcion.tipo);
        utter2.lang = "es-ES";
        window.speechSynthesis.speak(utter2);
      }, 300);//delay 300ms
    };
    window.speechSynthesis.speak(utter1);
  } else if (descripcion.tipo) {

    const utter = new SpeechSynthesisUtterance(descripcion.tipo);
    utter.lang = "es-ES";
    window.speechSynthesis.speak(utter);
  }
});


function obtenerDescripcionElemento(elemento) {
  let texto = "";
  if (elemento.innerText) {
    texto = elemento.innerText.trim();
  }
  
  const nombreElemento = elemento.tagName.toLowerCase();
  let tipo = "";
  
  if (nombreElemento === "a") {
    tipo = "enlace";
  } else if (nombreElemento === "input") {
    const tipoInput = elemento.getAttribute("type");
    if (tipoInput === "checkbox") {
      tipo = "interruptor";
    } 
    else if (tipoInput === "label") {
        tipo = "interruptor";
      }
    else if (tipoInput === "text") {
      tipo = "campo de texto";
    } else {
      tipo = "campo de entrada";
    }
  } else if (nombreElemento === "button") {
    tipo = "botón";
  } else if (nombreElemento === "img") {
    const altTexto = elemento.getAttribute("alt");
    tipo = altTexto ? `imagen: ${altTexto}` : "imagen sin descripción";
  } 
  else if (nombreElemento === "div") {
    if (elemento.classList.contains("slider")) {
      tipo = "interruptor";
    } 
    else {
      tipo = "div";
    }
  } 
  else if (nombreElemento === "label") {
    if (elemento.classList.contains("switch")) {
      tipo = "interruptor";
    } 
    else {
      tipo = "div";
    }
  }
  else if (nombreElemento === "li") {
    tipo = "elemento de lista";
  } else if (nombreElemento === "select") {
    tipo = "lista de selección";
  } else if (nombreElemento === "textarea") {
    tipo = "área de texto";
  } else {
    tipo = nombreElemento;
  }
  
  return {
    texto: texto,
    tipo: `Tipo de elemento: ${tipo}`
  };
}
