import { useEffect } from "react";

const LeadForm = () => {
  useEffect(() => {
    const form = document.getElementById("leadform-n8n") as HTMLFormElement | null;
    const phoneInput = document.getElementById("tel-2") as HTMLInputElement | null;
    const emailInput = document.getElementById("email-2") as HTMLInputElement | null;
    const nameInput = document.getElementById("name-2") as HTMLInputElement | null;
    const ddiSelect = document.getElementById("ddi-2") as HTMLSelectElement | null;

    if (!form || !phoneInput || !ddiSelect) return;

    const countryList2 = [
      { country_code: "AD", phone_mask: "999-999", country_name: "Andorra", regionCode: "376", emoji: "🇦🇩" },
      { country_code: "AE", phone_mask: "(99) 999-9999", country_name: "Emirados Árabes Unidos", regionCode: "971", emoji: "🇦🇪" },
      { country_code: "AF", phone_mask: "(99) 999-9999", country_name: "Afeganistão", regionCode: "93", emoji: "🇦🇫" },
      { country_code: "AL", phone_mask: "(99) 999-9999", country_name: "Albânia", regionCode: "355", emoji: "🇦🇱" },
      { country_code: "AM", phone_mask: "(99) 999-9999", country_name: "Armênia", regionCode: "374", emoji: "🇦🇲" },
      { country_code: "AO", phone_mask: "(99) 999-9999", country_name: "Angola", regionCode: "244", emoji: "🇦🇴" },
      { country_code: "AR", phone_mask: "(99) 9999-9999", country_name: "Argentina", regionCode: "54", emoji: "🇦🇷" },
      { country_code: "AT", phone_mask: "(9) 9999-9999", country_name: "Áustria", regionCode: "43", emoji: "🇦🇹" },
      { country_code: "AU", phone_mask: "(99) 9999-9999", country_name: "Austrália", regionCode: "61", emoji: "🇦🇺" },
      { country_code: "AZ", phone_mask: "(99) 999-9999", country_name: "Azerbaijão", regionCode: "994", emoji: "🇦🇿" },
      { country_code: "BA", phone_mask: "(99) 999-999", country_name: "Bósnia e Herzegovina", regionCode: "387", emoji: "🇧🇦" },
      { country_code: "BD", phone_mask: "(99) 9999-9999", country_name: "Bangladesh", regionCode: "880", emoji: "🇧🇩" },
      { country_code: "BE", phone_mask: "(99) 999-99-99", country_name: "Bélgica", regionCode: "32", emoji: "🇧🇪" },
      { country_code: "BG", phone_mask: "(999) 999-999", country_name: "Bulgária", regionCode: "359", emoji: "🇧🇬" },
      { country_code: "BH", phone_mask: "9999-9999", country_name: "Butão", regionCode: "975", emoji: "🇧🇹" },
      { country_code: "BJ", phone_mask: "9999-99999", country_name: "Benim", regionCode: "229", emoji: "🇧🇯" },
      { country_code: "BO", phone_mask: "(9) 999-9999", country_name: "Bolívia", regionCode: "591", emoji: "🇧🇴" },
      { country_code: "BR", phone_mask: "(99) 99999-9999", country_name: "Brasil", regionCode: "55", selected: true, emoji: "🇧🇷" },
      { country_code: "BY", phone_mask: "(99) 999-99-99", country_name: "Belarus", regionCode: "375", emoji: "🇧🇾" },
      { country_code: "CA", phone_mask: "(999) 999-9999", country_name: "Canadá", regionCode: "1", emoji: "🇨🇦" },
      { country_code: "CD", phone_mask: "(99) 999-9999", country_name: "República Democrática do Congo", regionCode: "243", emoji: "🇨🇩" },
      { country_code: "CH", phone_mask: "(99) 999-99-99", country_name: "Suíça", regionCode: "41", emoji: "🇨🇭" },
      { country_code: "CI", phone_mask: "(99) 99-99-99", country_name: "Costa do Marfim", regionCode: "225", emoji: "🇨🇮" },
      { country_code: "CL", phone_mask: "(99) 9999-9999", country_name: "Chile", regionCode: "56", emoji: "🇨🇱" },
      { country_code: "CM", phone_mask: "(99) 9999-9999", country_name: "Camarões", regionCode: "237", emoji: "🇨🇲" },
      { country_code: "CO", phone_mask: "(9) 999-9999", country_name: "Colômbia", regionCode: "57", emoji: "🇨🇴" },
      { country_code: "CV", phone_mask: "(99) 999-9999", country_name: "Cabo Verde", regionCode: "238", emoji: "🇨🇻" },
      { country_code: "CY", phone_mask: "9999-9999", country_name: "Chipre", regionCode: "357", emoji: "🇨🇾" },
      { country_code: "CZ", phone_mask: "999-999-999", country_name: "República Tcheca", regionCode: "420", emoji: "🇨🇿" },
      { country_code: "DE", phone_mask: "(99) 9999-9999", country_name: "Alemanha", regionCode: "49", emoji: "🇩🇪" },
      { country_code: "DK", phone_mask: "(99) 9999-9999", country_name: "Dinamarca", regionCode: "45", emoji: "🇩🇰" },
      { country_code: "DO", phone_mask: "(999) 999-9999", country_name: "República Dominicana", regionCode: "1", emoji: "🇩🇴" },
      { country_code: "EC", phone_mask: "(99) 999-9999", country_name: "Equador", regionCode: "593", emoji: "🇪🇨" },
      { country_code: "EE", phone_mask: "(99) 9999-9999", country_name: "Estônia", regionCode: "372", emoji: "🇪🇪" },
      { country_code: "EG", phone_mask: "(99) 9999-9999", country_name: "Egito", regionCode: "20", emoji: "🇪🇬" },
      { country_code: "ES", phone_mask: "999-999-999", country_name: "Espanha", regionCode: "34", emoji: "🇪🇸" },
      { country_code: "ET", phone_mask: "999-999-999", country_name: "Etiópia", regionCode: "251", emoji: "🇪🇹" },
      { country_code: "FI", phone_mask: "999-999-999", country_name: "Finlândia", regionCode: "358", emoji: "🇫🇮" },
      { country_code: "FO", phone_mask: "999999", country_name: "Ilhas Faroé", regionCode: "298", emoji: "🇫🇴" },
      { country_code: "FR", phone_mask: "(99) 9999-9999", country_name: "França", regionCode: "33", emoji: "🇫🇷" },
      { country_code: "GB", phone_mask: "(99) 9999-9999", country_name: "Reino Unido", regionCode: "44", emoji: "🇬🇧" },
      { country_code: "GE", phone_mask: "(99) 9999-9999", country_name: "Geórgia", regionCode: "995", emoji: "🇬🇪" },
      { country_code: "GH", phone_mask: "(99) 9999-9999", country_name: "Gana", regionCode: "233", emoji: "🇬🇭" },
      { country_code: "GI", phone_mask: "99999", country_name: "Gibraltar", regionCode: "350", emoji: "🇬🇮" },
      { country_code: "GL", phone_mask: "99999", country_name: "Groenlândia", regionCode: "299", emoji: "🇬🇱" },
      { country_code: "GR", phone_mask: "9999-999999", country_name: "Grécia", regionCode: "30", emoji: "🇬🇷" },
      { country_code: "HR", phone_mask: "(99) 999-9999", country_name: "Croácia", regionCode: "385", emoji: "🇭🇷" },
      { country_code: "HU", phone_mask: "(99) 999-9999", country_name: "Hungria", regionCode: "36", emoji: "🇭🇺" },
      { country_code: "ID", phone_mask: "(99) 9999-9999", country_name: "Indonésia", regionCode: "62", emoji: "🇮🇩" },
      { country_code: "IE", phone_mask: "(99) 999-9999", country_name: "Irlanda", regionCode: "353", emoji: "🇮🇪" },
      { country_code: "IL", phone_mask: "99-999-9999", country_name: "Israel", regionCode: "972", emoji: "🇮🇱" },
      { country_code: "IM", phone_mask: "(99) 9999-9999", country_name: "Ilha de Man", regionCode: "44", emoji: "🇮🇲" },
      { country_code: "IN", phone_mask: "(99) 9999-9999", country_name: "Índia", regionCode: "91", emoji: "🇮🇳" },
      { country_code: "IQ", phone_mask: "(99) 9999-9999", country_name: "Iraque", regionCode: "964", emoji: "🇮🇶" },
      { country_code: "IR", phone_mask: "(9999) 9999-9999", country_name: "Irã", regionCode: "98", emoji: "🇮🇷" },
      { country_code: "IS", phone_mask: "999-9999", country_name: "Islândia", regionCode: "354", emoji: "🇮🇸" },
      { country_code: "IT", phone_mask: "(99) 9999-9999", country_name: "Itália", regionCode: "39", emoji: "🇮🇹" },
      { country_code: "JP", phone_mask: "(99) 9999-9999", country_name: "Japão", regionCode: "81", emoji: "🇯🇵" },
      { country_code: "JO", phone_mask: "(99) 999-9999", country_name: "Jordânia", regionCode: "962", emoji: "🇯🇴" },
      { country_code: "KE", phone_mask: "(99) 9999-999", country_name: "Quênia", regionCode: "254", emoji: "🇰🇪" },
      { country_code: "KR", phone_mask: "(99) 999-9999", country_name: "Coreia do Sul", regionCode: "82", emoji: "🇰🇷" },
      { country_code: "KZ", phone_mask: "(999) 999-9999", country_name: "Cazaquistão", regionCode: "7", emoji: "🇰🇿" },
      { country_code: "LB", phone_mask: "(99) 999-999", country_name: "Líbano", regionCode: "961", emoji: "🇱🇧" },
      { country_code: "LI", phone_mask: "999 9999", country_name: "Liechtenstein", regionCode: "423", emoji: "🇱🇮" },
      { country_code: "LT", phone_mask: "(999) 99999", country_name: "Lituânia", regionCode: "370", emoji: "🇱🇹" },
      { country_code: "LU", phone_mask: "999-999", country_name: "Luxemburgo", regionCode: "352", emoji: "🇱🇺" },
      { country_code: "LV", phone_mask: "9999-9999", country_name: "Letônia", regionCode: "371", emoji: "🇱🇻" },
      { country_code: "MA", phone_mask: "9999-99999", country_name: "Marrocos", regionCode: "212", emoji: "🇲🇦" },
      { country_code: "MC", phone_mask: "99-99-99-99", country_name: "Mônaco", regionCode: "377", emoji: "🇲🇨" },
      { country_code: "MD", phone_mask: "999-9999", country_name: "Moldávia", regionCode: "373", emoji: "🇲🇩" },
      { country_code: "ME", phone_mask: "99-99-9999", country_name: "Montenegro", regionCode: "382", emoji: "🇲🇪" },
      { country_code: "MK", phone_mask: "99-999-999", country_name: "Macedônia do Norte", regionCode: "389", emoji: "🇲🇰" },
      { country_code: "MM", phone_mask: "9999-9999", country_name: "Mianmar", regionCode: "95", emoji: "🇲🇲" },
      { country_code: "MT", phone_mask: "9999-9999", country_name: "Malta", regionCode: "356", emoji: "🇲🇹" },
      { country_code: "MX", phone_mask: "(999) 999-9999", country_name: "México", regionCode: "52", emoji: "🇲🇽" },
      { country_code: "MY", phone_mask: "9999-9999", country_name: "Malásia", regionCode: "60", emoji: "🇲🇾" },
      { country_code: "MZ", phone_mask: "99-999-9999", country_name: "Moçambique", regionCode: "258", emoji: "🇲🇿" },
      { country_code: "NG", phone_mask: "9999-9999", country_name: "Nigéria", regionCode: "234", emoji: "🇳🇬" },
      { country_code: "NL", phone_mask: "(99) 999-9999", country_name: "Países Baixos", regionCode: "31", emoji: "🇳🇱" },
      { country_code: "NO", phone_mask: "999-999-99", country_name: "Noruega", regionCode: "47", emoji: "🇳🇴" },
      { country_code: "NP", phone_mask: "99-999-999", country_name: "Nepal", regionCode: "977", emoji: "🇳🇵" },
      { country_code: "NZ", phone_mask: "9-9999-9999", country_name: "Nova Zelândia", regionCode: "64", emoji: "🇳🇿" },
      { country_code: "PA", phone_mask: "9999-9999", country_name: "Panamá", regionCode: "507", emoji: "🇵🇦" },
      { country_code: "PE", phone_mask: "999-999999", country_name: "Peru", regionCode: "51", emoji: "🇵🇪" },
      { country_code: "PH", phone_mask: "(99) 9999-9999", country_name: "Filipinas", regionCode: "63", emoji: "🇵🇭" },
      { country_code: "PK", phone_mask: "(999) 9999999", country_name: "Paquistão", regionCode: "92", emoji: "🇵🇰" },
      { country_code: "PL", phone_mask: "999-999-999", country_name: "Polônia", regionCode: "48", emoji: "🇵🇱" },
      { country_code: "PT", phone_mask: "999-999-999", country_name: "Portugal", regionCode: "351", emoji: "🇵🇹" },
      { country_code: "PY", phone_mask: "(99) 999-9999", country_name: "Paraguai", regionCode: "595", emoji: "🇵🇾" },
      { country_code: "RO", phone_mask: "(99) 999-9999", country_name: "Romênia", regionCode: "40", emoji: "🇷🇴" },
      { country_code: "RS", phone_mask: "(99) 999-9999", country_name: "Sérvia", regionCode: "381", emoji: "🇷🇸" },
      { country_code: "RU", phone_mask: "999-999-99-99", country_name: "Rússia", regionCode: "7", emoji: "🇷🇺" },
      { country_code: "SA", phone_mask: "999-999-9999", country_name: "Arábia Saudita", regionCode: "966", emoji: "🇸🇦" },
      { country_code: "SD", phone_mask: "99999999", country_name: "Sudão", regionCode: "249", emoji: "🇸🇩" },
      { country_code: "SE", phone_mask: "99-999-99-99", country_name: "Suécia", regionCode: "46", emoji: "🇸🇪" },
      { country_code: "SG", phone_mask: "9999-9999", country_name: "Singapura", regionCode: "65", emoji: "🇸🇬" },
      { country_code: "SI", phone_mask: "99-999-999", country_name: "Eslovênia", regionCode: "386", emoji: "🇸🇮" },
      { country_code: "SK", phone_mask: "99-9999-999", country_name: "Eslováquia", regionCode: "421", emoji: "🇸🇰" },
      { country_code: "SM", phone_mask: "999-999-999", country_name: "San Marino", regionCode: "378", emoji: "🇸🇲" },
      { country_code: "SO", phone_mask: "99999999", country_name: "Somália", regionCode: "252", emoji: "🇸🇴" },
      { country_code: "SY", phone_mask: "9999-9999", country_name: "Síria", regionCode: "963", emoji: "🇸🇾" },
      { country_code: "TH", phone_mask: "(99) 999-9999", country_name: "Tailândia", regionCode: "66", emoji: "🇹🇭" },
      { country_code: "TN", phone_mask: "(99) 999-999", country_name: "Tunísia", regionCode: "216", emoji: "🇹🇳" },
      { country_code: "TR", phone_mask: "(999) 999-9999", country_name: "Turquia", regionCode: "90", emoji: "🇹🇷" },
      { country_code: "TZ", phone_mask: "999-999-999", country_name: "Tanzânia", regionCode: "255", emoji: "🇹🇿" },
      { country_code: "UA", phone_mask: "99-999-99-99", country_name: "Ucrânia", regionCode: "380", emoji: "🇺🇦" },
      { country_code: "UG", phone_mask: "999-999-999", country_name: "Uganda", regionCode: "256", emoji: "🇺🇬" },
      { country_code: "US", phone_mask: "(999) 999-9999", country_name: "Estados Unidos", regionCode: "1", emoji: "🇺🇸" },
      { country_code: "UY", phone_mask: "9999-9999", country_name: "Uruguai", regionCode: "598", emoji: "🇺🇾" },
      { country_code: "VA", phone_mask: "(9999) 9999-9999", country_name: "Cidade do Vaticano", regionCode: "39", emoji: "🇻🇦" },
      { country_code: "VE", phone_mask: "(99) 999-9999", country_name: "Venezuela", regionCode: "58", emoji: "🇻🇪" },
      { country_code: "VN", phone_mask: "(99) 9999-9999", country_name: "Vietnã", regionCode: "84", emoji: "🇻🇳" },
      { country_code: "XK", phone_mask: "(99) 999-999", country_name: "Kosovo", regionCode: "383", emoji: "🇽🇰" },
      { country_code: "ZM", phone_mask: "(99) 999-9999", country_name: "Zâmbia", regionCode: "260", emoji: "🇿🇲" },
      { country_code: "ZW", phone_mask: "(99) 999-9999", country_name: "Zimbábue", regionCode: "263", emoji: "🇿🇼" },
    ];

    const getCountryMask = (regionCode: string) => {
      const country = countryList2.find((c) => c.regionCode === regionCode);
      return country ? country.phone_mask : "(99) 99999-9999";
    };

    const applyMask = (input: HTMLInputElement, mask: string) => {
      let i = 0;
      const val = input.value.replace(/\D/g, "");
      input.value = mask.replace(/9/g, () => val[i++] || "");
    };

    const updatePlaceholder = (input: HTMLInputElement, mask: string) => {
      input.placeholder = mask.replace(/9/g, "0");
    };

    const maskPhone = (event: any) => {
      if (event?.inputType && (event.inputType === "deleteContentBackward" || event.inputType === "deleteContentForward")) {
        return;
      }

      if (phoneInput.value.trim() === "") {
        phoneInput.value = "";
        return;
      }

      const mask = getCountryMask(ddiSelect.value);
      applyMask(phoneInput, mask);
      updatePlaceholder(phoneInput, mask);
      const phoneWithDdi = "+" + ddiSelect.value + phoneInput.value.replace(/\D/g, "");
      (phoneInput as any).dataset.phoneWithDdi = phoneWithDdi;
    };

    // Initialize placeholder and listeners
    const initialMask = getCountryMask(ddiSelect.value);
    updatePlaceholder(phoneInput, initialMask);
    phoneInput.addEventListener("input", maskPhone as any);
    const ddiChangeHandler = () => {
      const m = getCountryMask(ddiSelect.value);
      if (m) updatePlaceholder(phoneInput, m);
      phoneInput.dispatchEvent(new Event("input"));
    };
    ddiSelect.addEventListener("change", ddiChangeHandler);

    const submitHandler = (e: Event) => {
      const phoneWithDdi = (phoneInput as any).dataset.phoneWithDdi || "";
      phoneInput.value = phoneWithDdi;
      setTimeout(() => {
        phoneInput.value = "";
        if (nameInput) nameInput.value = "";
        if (emailInput) emailInput.value = "";
      }, 500);
    };
    form.addEventListener("submit", submitHandler);

    // Append origin_query hidden input with full query params
    const queryParams = new URLSearchParams(window.location.search);
    const paramsObj: Record<string, string> = {};
    for (const [key, value] of queryParams) {
      paramsObj[key] = value;
    }
    if (Object.keys(paramsObj).length > 0) {
      let existingInput = form.querySelector('input[name="origin_query"]') as HTMLInputElement | null;
      if (!existingInput) {
        existingInput = document.createElement("input");
        existingInput.type = "hidden";
        existingInput.name = "origin_query";
        form.appendChild(existingInput);
      }
      existingInput.value = JSON.stringify(paramsObj);
    }

    return () => {
      phoneInput.removeEventListener("input", maskPhone as any);
      ddiSelect.removeEventListener("change", ddiChangeHandler);
      form.removeEventListener("submit", submitHandler);
    };
  }, []);
  return (
    <section className="py-12 sm:py-16 bg-white animated-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gray-100 rounded-2xl p-8 sm:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-gray-800">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Pronto para transformar seu <span className="text-primary">Atendimento</span>?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Comece agora sem compromisso. Preencha o formulário e nossa equipe entrará em contato.
              </p>
            </div>
            <div>
              <form
                id="leadform-n8n"
                method="post"
                action="https://n8n.comea.com.br/webhook/webhook_gfjx0ew4"
                acceptCharset="UTF-8"
                className="space-y-4"
              >
                <meta charSet="UTF-8" />
                <div className="container_html" style={{ width: "100%" }}>
                  <input type="hidden" name="event" value="invoice_open" />
                  <input type="hidden" name="flowId" value="flow_1757588308844" />
                  <div style={{ marginBottom: "1rem" }}>
                    <input
                      type="text"
                      id="name-2"
                      name="name"
                      placeholder="Insira seu nome"
                      style={{
                        display: "block",
                        width: "100%",
                        padding: ".375rem .75rem",
                        fontSize: "1rem",
                        fontWeight: 400,
                        lineHeight: 1.5,
                        color: "#212529",
                        backgroundColor: "#fff",
                        border: "1px solid #ced4da",
                        borderRadius: ".25rem",
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: "1rem" }}>
                    <input
                      type="email"
                      id="email-2"
                      name="email"
                      placeholder="Insira seu melhor e-mail"
                      required
                      style={{
                        display: "block",
                        width: "100%",
                        padding: "0.54rem",
                        fontSize: "1rem",
                        fontWeight: 400,
                        lineHeight: 1.5,
                        color: "#212529",
                        backgroundColor: "#fff",
                        border: "1px solid #ced4da",
                        borderRadius: ".25rem",
                      }}
                    />
                  </div>

                  <div className="form-group-2">
                    <select className="form-control" id="ddi-2" defaultValue="55">
                      <option value="376">🇦🇩 +376</option>
                      <option value="971">🇦🇪 +971</option>
                      <option value="93">🇦🇫 +93</option>
                      <option value="355">🇦🇱 +355</option>
                      <option value="374">🇦🇲 +374</option>
                      <option value="244">🇦🇴 +244</option>
                      <option value="54">🇦🇷 +54</option>
                      <option value="43">🇦🇹 +43</option>
                      <option value="61">🇦🇺 +61</option>
                      <option value="994">🇦🇿 +994</option>
                      <option value="387">🇧🇦 +387</option>
                      <option value="880">🇧🇩 +880</option>
                      <option value="32">🇧🇪 +32</option>
                      <option value="359">🇧🇬 +359</option>
                      <option value="975">🇧🇹 +975</option>
                      <option value="229">🇧🇯 +229</option>
                      <option value="591">🇧🇴 +591</option>
                      <option value="55">🇧🇷 +55</option>
                      <option value="375">🇧🇾 +375</option>
                      <option value="1">🇨🇦 +1</option>
                      <option value="243">🇨🇩 +243</option>
                      <option value="41">🇨🇭 +41</option>
                      <option value="225">🇨🇮 +225</option>
                      <option value="56">🇨🇱 +56</option>
                      <option value="237">🇨🇲 +237</option>
                      <option value="57">🇨🇴 +57</option>
                      <option value="238">🇨🇻 +238</option>
                      <option value="357">🇨🇾 +357</option>
                      <option value="420">🇨🇿 +420</option>
                      <option value="49">🇩🇪 +49</option>
                      <option value="45">🇩🇰 +45</option>
                      <option value="1">🇩🇴 +1</option>
                      <option value="593">🇪🇨 +593</option>
                      <option value="372">🇪🇪 +372</option>
                      <option value="20">🇪🇬 +20</option>
                      <option value="34">🇪🇸 +34</option>
                      <option value="251">🇪🇹 +251</option>
                      <option value="358">🇫🇮 +358</option>
                      <option value="298">🇫🇴 +298</option>
                      <option value="33">🇫🇷 +33</option>
                      <option value="44">🇬🇧 +44</option>
                      <option value="995">🇬🇪 +995</option>
                      <option value="233">🇬🇭 +233</option>
                      <option value="350">🇬🇮 +350</option>
                      <option value="299">🇬🇱 +299</option>
                      <option value="30">🇬🇷 +30</option>
                      <option value="385">🇭🇷 +385</option>
                      <option value="36">🇭🇺 +36</option>
                      <option value="62">🇮🇩 +62</option>
                      <option value="353">🇮🇪 +353</option>
                      <option value="972">🇮🇱 +972</option>
                      <option value="44">🇮🇲 +44</option>
                      <option value="91">🇮🇳 +91</option>
                      <option value="964">🇮🇶 +964</option>
                      <option value="98">🇮🇷 +98</option>
                      <option value="354">🇮🇸 +354</option>
                      <option value="39">🇮🇹 +39</option>
                      <option value="81">🇯🇵 +81</option>
                      <option value="962">🇯🇴 +962</option>
                      <option value="254">🇰🇪 +254</option>
                      <option value="82">🇰🇷 +82</option>
                      <option value="7">🇰🇿 +7</option>
                      <option value="961">🇱🇧 +961</option>
                      <option value="423">🇱🇮 +423</option>
                      <option value="370">🇱🇹 +370</option>
                      <option value="352">🇱🇺 +352</option>
                      <option value="371">🇱🇻 +371</option>
                      <option value="212">🇲🇦 +212</option>
                      <option value="377">🇲🇨 +377</option>
                      <option value="373">🇲🇩 +373</option>
                      <option value="382">🇲🇪 +382</option>
                      <option value="389">🇲🇰 +389</option>
                      <option value="95">🇲🇲 +95</option>
                      <option value="356">🇲🇹 +356</option>
                      <option value="52">🇲🇽 +52</option>
                      <option value="60">🇲🇾 +60</option>
                      <option value="258">🇲🇿 +258</option>
                      <option value="234">🇳🇬 +234</option>
                      <option value="31">🇳🇱 +31</option>
                      <option value="47">🇳🇴 +47</option>
                      <option value="977">🇳🇵 +977</option>
                      <option value="64">🇳🇿 +64</option>
                      <option value="507">🇵🇦 +507</option>
                      <option value="51">🇵🇪 +51</option>
                      <option value="63">🇵🇭 +63</option>
                      <option value="92">🇵🇰 +92</option>
                      <option value="48">🇵🇱 +48</option>
                      <option value="351">🇵🇹 +351</option>
                      <option value="595">🇵🇾 +595</option>
                      <option value="40">🇷🇴 +40</option>
                      <option value="381">🇷🇸 +381</option>
                      <option value="7">🇷🇺 +7</option>
                      <option value="966">🇸🇦 +966</option>
                      <option value="249">🇸🇩 +249</option>
                      <option value="46">🇸🇪 +46</option>
                      <option value="65">🇸🇬 +65</option>
                      <option value="386">🇸🇮 +386</option>
                      <option value="421">🇸🇰 +421</option>
                      <option value="378">🇸🇲 +378</option>
                      <option value="252">🇸🇴 +252</option>
                      <option value="963">🇸🇾 +963</option>
                      <option value="66">🇹🇭 +66</option>
                      <option value="216">🇹🇳 +216</option>
                      <option value="90">🇹🇷 +90</option>
                      <option value="255">🇹🇿 +255</option>
                      <option value="380">🇺🇦 +380</option>
                      <option value="256">🇺🇬 +256</option>
                      <option value="1">🇺🇸 +1</option>
                      <option value="598">🇺🇾 +598</option>
                      <option value="39">🇻🇦 +39</option>
                      <option value="58">🇻🇪 +58</option>
                      <option value="84">🇻🇳 +84</option>
                      <option value="383">🇽🇰 +383</option>
                      <option value="260">🇿🇲 +260</option>
                      <option value="263">🇿🇼 +263</option>
                    </select>
                    <input
                      data-phone-with-ddi=""
                      type="tel"
                      id="tel-2"
                      name="phone"
                      maxLength={15}
                      placeholder="(00) 00000-0000"
                      required
                      style={{
                        flex: 1,
                        padding: ".375rem .75rem",
                        fontSize: "1rem",
                        fontWeight: 400,
                        lineHeight: 1.5,
                        color: "#212529",
                        backgroundColor: "#fff",
                        border: "1px solid #ced4da",
                        borderRadius: "0 .25rem .25rem 0",
                      }}
                    />
                  </div>
                  <input
                    type="hidden"
                    name="redirect_url"
                    value="https://lp.followop.com.br/?name={name}&email={email}&phone={phone}&phonenumber={phone}"
                  />
                  <textarea
                    name="popup_opening_text"
                    style={{ display: "none" }}
                    defaultValue={
                      "Oi {name}, vi que você está buscando aumentar suas vendas com IA no Whatsapp.\nPosso entender melhor sua operação em uma reunião rápida?\n\nMe confirme se esse é seu email {email}?"
                    }
                  />
                  <input type="hidden" name="popup_opening_time" value="1" />
                  <input
                    type="submit"
                    value="Quero testar grátis por 15 dias!"
                    style={{
                      display: "block",
                      width: "100%",
                      lineHeight: 1.5,
                      textAlign: "center",
                      textDecoration: "none",
                      verticalAlign: "middle",
                      cursor: "pointer",
                      fontSize: "1rem",
                      marginTop: 20,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      textShadow: "0 0 2px rgb(0 0 0 / 80%)",
                      padding: 13,
                      backgroundColor: "#16B763",
                      color: "#fff",
                      borderRadius: 15,
                      boxShadow: "0 -1px 24px 0 #16b763",
                      border: "1px solid transparent",
                    }}
                  />
                  <style
                    dangerouslySetInnerHTML={{
                      __html: `
              .form-group-2 {
                  display: flex;
                  align-items: center;
                  width: 100%;
                  margin-bottom: 1rem;
              }

              .form-group-2 select,
              .form-group-2 input[type="tel"] {
                  font-size: 1rem;
                  font-weight: 400;
                  line-height: 1.5;
                  color: #000;
                  background-color: #fff !important;
                  padding: .370rem .75rem !important;
                  height: calc(2.25rem + 2px) !important;
                  border: 1px solid #ced4da !important;
                  box-sizing: border-box !important; 
              }

              .form-group-2 select {
                  border-right: none !important;
                  border-radius: .25rem 0 0 .25rem !important;
                  max-width: 25% !important;
              }
              .container_html {
                transition: width 0.5s;
              }

              @media (max-width: 600px) {
                .container_html { width: 100% !important }
              }
              .form-group-2 input[type="tel"] {
                  flex: 1;
                  border-radius: 0 .25rem .25rem 0;
                  height: 100%; 
              }
            `,
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
