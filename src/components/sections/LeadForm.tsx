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
                      <option value="376">AD</option>
                      <option value="971">AE</option>
                      <option value="93">AF</option>
                      <option value="355">AL</option>
                      <option value="374">AM</option>
                      <option value="244">AO</option>
                      <option value="54">AR</option>
                      <option value="43">AT</option>
                      <option value="61">AU</option>
                      <option value="994">AZ</option>
                      <option value="387">BA</option>
                      <option value="880">BD</option>
                      <option value="32">BE</option>
                      <option value="359">BG</option>
                      <option value="975">BT</option>
                      <option value="229">BJ</option>
                      <option value="591">BO</option>
                      <option value="55">BR</option>
                      <option value="375">BY</option>
                      <option value="1">CA</option>
                      <option value="243">CD</option>
                      <option value="41">CH</option>
                      <option value="225">CI</option>
                      <option value="56">CL</option>
                      <option value="237">CM</option>
                      <option value="57">CO</option>
                      <option value="238">CV</option>
                      <option value="357">CY</option>
                      <option value="420">CZ</option>
                      <option value="49">DE</option>
                      <option value="45">DK</option>
                      <option value="1">DO</option>
                      <option value="593">EC</option>
                      <option value="372">EE</option>
                      <option value="20">EG</option>
                      <option value="34">ES</option>
                      <option value="251">ET</option>
                      <option value="358">FI</option>
                      <option value="298">FO</option>
                      <option value="33">FR</option>
                      <option value="44">GB</option>
                      <option value="995">GE</option>
                      <option value="233">GH</option>
                      <option value="350">GI</option>
                      <option value="299">GL</option>
                      <option value="30">GR</option>
                      <option value="385">HR</option>
                      <option value="36">HU</option>
                      <option value="62">ID</option>
                      <option value="353">IE</option>
                      <option value="972">IL</option>
                      <option value="44">IM</option>
                      <option value="91">IN</option>
                      <option value="964">IQ</option>
                      <option value="98">IR</option>
                      <option value="354">IS</option>
                      <option value="39">IT</option>
                      <option value="81">JP</option>
                      <option value="962">JO</option>
                      <option value="254">KE</option>
                      <option value="82">KR</option>
                      <option value="7">KZ</option>
                      <option value="961">LB</option>
                      <option value="423">LI</option>
                      <option value="370">LT</option>
                      <option value="352">LU</option>
                      <option value="371">LV</option>
                      <option value="212">MA</option>
                      <option value="377">MC</option>
                      <option value="373">MD</option>
                      <option value="382">ME</option>
                      <option value="389">MK</option>
                      <option value="95">MM</option>
                      <option value="356">MT</option>
                      <option value="52">MX</option>
                      <option value="60">MY</option>
                      <option value="258">MZ</option>
                      <option value="234">NG</option>
                      <option value="31">NL</option>
                      <option value="47">NO</option>
                      <option value="977">NP</option>
                      <option value="64">NZ</option>
                      <option value="507">PA</option>
                      <option value="51">PE</option>
                      <option value="63">PH</option>
                      <option value="92">PK</option>
                      <option value="48">PL</option>
                      <option value="351">PT</option>
                      <option value="595">PY</option>
                      <option value="40">RO</option>
                      <option value="381">RS</option>
                      <option value="7">RU</option>
                      <option value="966">SA</option>
                      <option value="249">SD</option>
                      <option value="46">SE</option>
                      <option value="65">SG</option>
                      <option value="386">SI</option>
                      <option value="421">SK</option>
                      <option value="378">SM</option>
                      <option value="252">SO</option>
                      <option value="963">SY</option>
                      <option value="66">TH</option>
                      <option value="216">TN</option>
                      <option value="90">TR</option>
                      <option value="255">TZ</option>
                      <option value="380">UA</option>
                      <option value="256">UG</option>
                      <option value="1">US</option>
                      <option value="598">UY</option>
                      <option value="39">VA</option>
                      <option value="58">VE</option>
                      <option value="84">VN</option>
                      <option value="383">XK</option>
                      <option value="260">ZM</option>
                      <option value="263">ZW</option>
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
                        paddingTop: ".375rem",
                        paddingBottom: ".375rem",
                        paddingLeft: "1.1rem", // reduce so first char isn't clipped
                        paddingRight: "1rem",
                        textAlign: "left",
                        fontSize: "1rem",
                        fontWeight: 400,
                        lineHeight: 1.5,
                        color: "#212529",
                        backgroundColor: "#fff",
                        border: "1px solid #ced4da",
                        borderRadius: "0 .25rem .25rem 0",
                        boxSizing: "border-box",
                        zIndex: 1,
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
                  <button
                    type="submit"
                    aria-label="Quero testar grátis por 15 dias"
                    className="lead-submit"
                    style={{
                      display: "block",
                      width: "100%",
                      lineHeight: 1.4,
                      textAlign: "center",
                      textDecoration: "none",
                      verticalAlign: "middle",
                      cursor: "pointer",
                      fontSize: "1rem",
                      marginTop: 20,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      padding: 13,
                      backgroundColor: "#16B763",
                      color: "#fff",
                      borderRadius: 15,
                      boxShadow: "0 -1px 24px 0 #16b763",
                      border: "1px solid transparent",
                    }}
                  >
                    Quero testar grátis por 15 dias!
                  </button>
                  <style
                    dangerouslySetInnerHTML={{
                      __html: `
              /* Ultra-compact, fully responsive form controls for all devices */
              .container_html, .container_html * { box-sizing: border-box; }

              /* Desktop: all fields full width, min-height 44px, compact padding */
              .container_html input[type="text"],
              .container_html input[type="email"],
              .container_html textarea,
              .form-group-2 select,
              .form-group-2 input[type="tel"] {
                width: 100%;
                min-height: 44px;
                height: 44px;
                padding: 0 0.85rem;
                font-size: 0.97rem;
                border-radius: 10px;
                border: 1px solid #e6e6e6;
                background: #fff;
                box-sizing: border-box;
                margin-bottom: 0.7rem;
                transition: border 0.2s;
              }

              .form-group-2 {
                display: flex;
                align-items: stretch;
                width: 100%;
                gap: 0;
                margin-bottom: 0.7rem;
                border: none;
                border-radius: 10px;
                background: transparent;
                overflow: visible;
              }

              .form-group-2 select {
                width: 48px;
                flex: 0 0 48px;
                border-radius: 10px 0 0 10px;
                border-right: none;
                margin-bottom: 0;
                background: #fff;
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                text-align: left;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }

              .form-group-2 input[type="tel"] {
                flex: 1 1 auto;
                border-radius: 0 10px 10px 0;
                /* remove left border to avoid clipping overlap */
                border-left: none;
                margin-bottom: 0;
                background: #fff;
                outline: none;
                min-width: 0;
                padding-left: 1.1rem; /* match inline default */
                padding-right: 1rem;
                font-size: 1.05rem; /* slightly larger for number prominence */
                z-index: 1;
              }

              .container_html select, .container_html button, .container_html input[type="tel"] {
                font-size: 0.97rem;
              }

              .container_html input::placeholder,
              .container_html textarea::placeholder {
                color: #b3bac6;
                font-size: 0.95rem;
                opacity: 1;
              }

              .lead-submit, input[type="submit"] {
                padding: 10px 0 !important;
                font-size: 1rem !important;
                border-radius: 10px !important;
                box-shadow: none !important;
                width: 100%;
                display: block;
                min-height: 44px;
                margin-bottom: 0;
              }

              /* Mobile: keep DDI + phone on one line, allow phone to shrink (no wrap) */
              @media (max-width: 640px) {
                .form-group-2 {
                  display: flex;
                  flex-direction: row;
                  flex-wrap: nowrap; /* prevent wrapping */
                  gap: 0.5rem;
                  align-items: center;
                  margin-bottom: 0.7rem;
                }

                .form-group-2 select {
                  width: 48px !important;
                  flex: 0 0 48px !important;
                  height: 44px !important;
                  border-radius: 8px;
                }

                .form-group-2 input[type="tel"] {
                  flex: 1 1 auto !important;
                  min-width: 0 !important; /* allows shrinking */
                  height: 44px !important;
                  border-radius: 8px;
                  padding-left: 2rem !important;
                  padding-right: 0.9rem !important;
                }

                .container_html input[type="text"], .container_html input[type="email"], .container_html textarea {
                  min-height: 44px;
                  height: 44px;
                  padding: 0 0.7rem;
                  font-size: 0.95rem;
                }

                .lead-submit { padding: 10px 0 !important; min-height: 44px; }
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

