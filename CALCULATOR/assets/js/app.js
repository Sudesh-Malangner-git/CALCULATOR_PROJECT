const formatNumber = (value) => {
  if (!Number.isFinite(value)) {
    return "Invalid";
  }

  const rounded = Math.round((value + Number.EPSILON) * 1000) / 1000;
  return rounded.toLocaleString("en-US", {
    maximumFractionDigits: 3,
  });
};

const getNumber = (form, name) => {
  const field = form.elements[name];
  const value = Number(field ? field.value : NaN);

  if (!Number.isFinite(value)) {
    throw new Error("Enter valid numbers first.");
  }

  return value;
};

const setResult = (form, value, unit = "", note = "") => {
  const result = form.querySelector("[data-result]");
  const resultNote = form.querySelector("[data-result-note]");

  if (result) {
    result.textContent = `${formatNumber(value)}${unit ? ` ${unit}` : ""}`;
  }

  if (resultNote) {
    resultNote.textContent = note;
  }
};

const formulas = {
  cuboidSurface(form) {
    const length = getNumber(form, "length");
    const width = getNumber(form, "width");
    const height = getNumber(form, "height");
    return {
      value: 2 * (length * width + length * height + width * height),
      unit: "sq. units",
    };
  },
  cubeSurface(form) {
    const edge = getNumber(form, "edge");
    return {
      value: 6 * edge * edge,
      unit: "sq. units",
    };
  },
  sphereSurface(form) {
    const radius = getNumber(form, "radius");
    return {
      value: 4 * Math.PI * radius * radius,
      unit: "sq. units",
    };
  },
  rectangleArea(form) {
    const length = getNumber(form, "length");
    const width = getNumber(form, "width");
    return {
      value: length * width,
      unit: "sq. units",
    };
  },
  circleArea(form) {
    const radius = getNumber(form, "radius");
    return {
      value: Math.PI * radius * radius,
      unit: "sq. units",
    };
  },
  cylinderSurface(form) {
    const radius = getNumber(form, "radius");
    const height = getNumber(form, "height");
    return {
      value: 2 * Math.PI * radius * (radius + height),
      unit: "sq. units",
    };
  },
  parallelogramArea(form) {
    const base = getNumber(form, "base");
    const height = getNumber(form, "height");
    return {
      value: base * height,
      unit: "sq. units",
    };
  },
  trapezoidArea(form) {
    const baseA = getNumber(form, "baseA");
    const baseB = getNumber(form, "baseB");
    const height = getNumber(form, "height");
    return {
      value: ((baseA + baseB) / 2) * height,
      unit: "sq. units",
    };
  },
  ellipseArea(form) {
    const radiusA = getNumber(form, "radiusA");
    const radiusB = getNumber(form, "radiusB");
    return {
      value: Math.PI * radiusA * radiusB,
      unit: "sq. units",
    };
  },
  cubeVolume(form) {
    const side = getNumber(form, "side");
    return {
      value: side ** 3,
      unit: "cu. units",
    };
  },
  cuboidVolume(form) {
    const length = getNumber(form, "length");
    const width = getNumber(form, "width");
    const height = getNumber(form, "height");
    return {
      value: length * width * height,
      unit: "cu. units",
    };
  },
  cylinderVolume(form) {
    const radius = getNumber(form, "radius");
    const height = getNumber(form, "height");
    return {
      value: Math.PI * radius * radius * height,
      unit: "cu. units",
    };
  },
  sphereVolume(form) {
    const radius = getNumber(form, "radius");
    return {
      value: (4 / 3) * Math.PI * radius ** 3,
      unit: "cu. units",
    };
  },
  coneVolume(form) {
    const radius = getNumber(form, "radius");
    const height = getNumber(form, "height");
    return {
      value: (Math.PI * radius * radius * height) / 3,
      unit: "cu. units",
    };
  },
};

const initFormulaForms = () => {
  document.querySelectorAll("[data-formula-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formula = formulas[form.dataset.formulaForm];

      if (!formula) {
        return;
      }

      try {
        const answer = formula(form);
        setResult(form, answer.value, answer.unit);
      } catch (error) {
        const result = form.querySelector("[data-result]");
        const resultNote = form.querySelector("[data-result-note]");

        if (result) {
          result.textContent = "Check input";
        }

        if (resultNote) {
          resultNote.textContent = error.message;
        }
      }
    });
  });
};

const initCalculator = () => {
  const calculator = document.querySelector("[data-calculator]");

  if (!calculator) {
    return;
  }

  const display = calculator.querySelector("[data-display]");
  let justEvaluated = false;

  const appendToken = (token) => {
    if (display.value === "Error" || (justEvaluated && /[0-9.]/.test(token))) {
      display.value = "";
    }

    justEvaluated = false;
    display.value += token;
    display.focus();
  };

  const backspace = () => {
    display.value = display.value.slice(0, -1);
  };

  const clear = () => {
    display.value = "";
    justEvaluated = false;
  };

  const evaluate = () => {
    const expression = display.value.trim();

    if (!expression) {
      return;
    }

    try {
      if (!/^[0-9+\-*/%.()\s]+$/.test(expression)) {
        throw new Error("Unsafe expression");
      }

      const answer = Function(`"use strict"; return (${expression})`)();

      if (!Number.isFinite(answer)) {
        throw new Error("Invalid result");
      }

      display.value = String(Math.round((answer + Number.EPSILON) * 100000000) / 100000000);
      justEvaluated = true;
    } catch (error) {
      display.value = "Error";
      justEvaluated = true;
    }
  };

  calculator.addEventListener("click", (event) => {
    const button = event.target.closest("[data-key]");

    if (!button) {
      return;
    }

    const key = button.dataset.key;

    if (key === "clear") {
      clear();
      return;
    }

    if (key === "backspace") {
      backspace();
      return;
    }

    if (key === "equals") {
      evaluate();
      return;
    }

    appendToken(key);
  });

  document.addEventListener("keydown", (event) => {
    if (!event.key.match(/^[0-9+\-*/%.()]$/) && !["Enter", "Backspace", "Escape"].includes(event.key)) {
      return;
    }

    event.preventDefault();

    if (event.key === "Enter") {
      evaluate();
      return;
    }

    if (event.key === "Backspace") {
      backspace();
      return;
    }

    if (event.key === "Escape") {
      clear();
      return;
    }

    appendToken(event.key);
  });
};

const initBmi = () => {
  const form = document.querySelector("[data-bmi-form]");

  if (!form) {
    return;
  }

  const categories = [
    { max: 18.5, label: "Underweight" },
    { max: 25, label: "Healthy range" },
    { max: 30, label: "Overweight" },
    { max: Infinity, label: "Obesity range" },
  ];

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    try {
      const heightCm = getNumber(form, "height");
      const weightKg = getNumber(form, "weight");
      const heightM = heightCm / 100;
      const bmi = weightKg / (heightM * heightM);
      const category = categories.find((item) => bmi < item.max);
      setResult(form, bmi, "", category ? category.label : "");
    } catch (error) {
      setResult(form, NaN, "", error.message);
    }
  });
};

const initConverters = () => {
  const converters = {
    poundsToKg: (value) => value * 0.45359237,
    feetToCm: (value) => value * 30.48,
  };

  document.querySelectorAll("[data-convert-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const converter = converters[form.dataset.convertForm];

      if (!converter) {
        return;
      }

      try {
        const value = getNumber(form, "value");
        const result = converter(value);
        const unit = form.dataset.unit || "";
        setResult(form, result, unit);
      } catch (error) {
        setResult(form, NaN, "", error.message);
      }
    });
  });
};

const initDemoForms = () => {
  document.querySelectorAll("[data-demo-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = form.querySelector("[data-status]");
      const destination = form.dataset.redirect || "";

      if (status) {
        status.textContent = form.dataset.success || "Saved successfully.";
      }

      if (destination) {
        window.setTimeout(() => {
          window.location.href = destination;
        }, 600);
      }
    });
  });
};

const initContactForm = () => {
  const form = document.querySelector("[data-contact-form]");

  if (!form) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector("[data-status]");

    if (status) {
      status.textContent = "Thanks. Your feedback was received.";
    }

    form.reset();
  });
};

document.addEventListener("DOMContentLoaded", () => {
  initFormulaForms();
  initCalculator();
  initBmi();
  initConverters();
  initDemoForms();
  initContactForm();
});
