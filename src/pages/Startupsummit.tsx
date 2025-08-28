import React, { useEffect, useRef } from 'react';

const countryList2 = [
  {"country_code":"AD","phone_mask":"999-999","country_name":"Andorra","regionCode":"376","emoji":"🇦🇩"},  {"country_code":"AE","phone_mask":"(99) 999-9999","country_name":"Emirados Árabes Unidos","regionCode":"971","emoji":"🇦🇪"},  {"country_code":"AF","phone_mask":"(99) 999-9999","country_name":"Afeganistão","regionCode":"93","emoji":"🇦🇫"},  {"country_code":"AL","phone_mask":"(99) 999-9999","country_name":"Albânia","regionCode":"355","emoji":"🇦🇱"},  {"country_code":"AM","phone_mask":"(99) 999-9999","country_name":"Armênia","regionCode":"374","emoji":"🇦🇲"},  {"country_code":"AO","phone_mask":"(99) 999-9999","country_name":"Angola","regionCode":"244","emoji":"🇦🇴"},  {"country_code":"AR","phone_mask":"(99) 9999-9999","country_name":"Argentina","regionCode":"54","emoji":"🇦🇷"},  {"country_code":"AT","phone_mask":"(9) 9999-9999","country_name":"Áustria","regionCode":"43","emoji":"🇦🇹"},  {"country_code":"AU","phone_mask":"(99) 9999-9999","country_name":"Austrália","regionCode":"61","emoji":"🇦🇺"},  {"country_code":"AZ","phone_mask":"(99) 999-9999","country_name":"Azerbaijão","regionCode":"994","emoji":"🇦🇿"},  {"country_code":"BA","phone_mask":"(99) 999-999","country_name":"Bósnia e Herzegovina","regionCode":"387","emoji":"🇧🇦"},  {"country_code":"BD","phone_mask":"(99) 9999-9999","country_name":"Bangladesh","regionCode":"880","emoji":"🇧🇩"},  {"country_code":"BE","phone_mask":"(99) 999-99-99","country_name":"Bélgica","regionCode":"32","emoji":"🇧🇪"},  {"country_code":"BG","phone_mask":"(999) 999-999","country_name":"Bulgária","regionCode":"359","emoji":"🇧🇬"},  {"country_code":"BH","phone_mask":"9999-9999","country_name":"Butão","regionCode":"975","emoji":"🇧🇹"},  {"country_code":"BJ","phone_mask":"9999-99999","country_name":"Benim","regionCode":"229","emoji":"🇧🇯"},  {"country_code":"BO","phone_mask":"(9) 999-9999","country_name":"Bolívia","regionCode":"591","emoji":"🇧🇴"},  {"country_code":"BR","phone_mask":"(99) 99999-9999","country_name":"Brasil","regionCode":"55","selected":true,"emoji":"🇧🇷"},  {"country_code":"BY","phone_mask":"(99) 999-99-99","country_name":"Belarus","regionCode":"375","emoji":"🇧🇾"},  {"country_code":"CA","phone_mask":"(999) 999-9999","country_name":"Canadá","regionCode":"1","emoji":"🇨🇦"},  {"country_code":"CD","phone_mask":"(99) 999-9999","country_name":"República Democrática do Congo","regionCode":"243","emoji":"🇨🇩"},  {"country_code":"CH","phone_mask":"(99) 999-99-99","country_name":"Suíça","regionCode":"41","emoji":"🇨🇭"},  {"country_code":"CI","phone_mask":"(99) 99-99-99","country_name":"Costa do Marfim","regionCode":"225","emoji":"🇨🇮"},  {"country_code":"CL","phone_mask":"(99) 9999-9999","country_name":"Chile","regionCode":"56","emoji":"🇨🇱"},  {"country_code":"CM","phone_mask":"(99) 9999-9999","country_name":"Camarões","regionCode":"237","emoji":"🇨🇲"},  {"country_code":"CO","phone_mask":"(9) 999-9999","country_name":"Colômbia","regionCode":"57","emoji":"🇨🇴"},  {"country_code":"CV","phone_mask":"(99) 999-9999","country_name":"Cabo Verde","regionCode":"238","emoji":"🇨🇻"},  {"country_code":"CY","phone_mask":"9999-9999","country_name":"Chipre","regionCode":"357","emoji":"🇨🇾"},  {"country_code":"CZ","phone_mask":"999-999-999","country_name":"República Tcheca","regionCode":"420","emoji":"🇨🇿"},  {"country_code":"DE","phone_mask":"(99) 9999-9999","country_name":"Alemanha","regionCode":"49","emoji":"🇩🇪"},  {"country_code":"DK","phone_mask":"(99) 9999-9999","country_name":"Dinamarca","regionCode":"45","emoji":"🇩🇰"},  {"country_code":"DO","phone_mask":"(999) 999-9999","country_name":"República Dominicana","regionCode":"1","emoji":"🇩🇴"},  {"country_code":"EC","phone_mask":"(99) 999-9999","country_name":"Equador","regionCode":"593","emoji":"🇪🇨"},  {"country_code":"EE","phone_mask":"(99) 9999-9999","country_name":"Estônia","regionCode":"372","emoji":"🇪🇪"},  {"country_code":"EG","phone_mask":"(99) 9999-9999","country_name":"Egito","regionCode":"20","emoji":"🇪🇬"},  {"country_code":"ES","phone_mask":"999-999-999","country_name":"Espanha","regionCode":"34","emoji":"🇪🇸"},  {"country_code":"ET","phone_mask":"999-999-999","country_name":"Etiópia","regionCode":"251","emoji":"🇪🇹"},  {"country_code":"FI","phone_mask":"999-999-999","country_name":"Finlândia","regionCode":"358","emoji":"🇫🇮"},  {"country_code":"FO","phone_mask":"999999","country_name":"Ilhas Faroé","regionCode":"298","emoji":"🇫🇴"},  {"country_code":"FR","phone_mask":"(99) 9999-9999","country_name":"França","regionCode":"33","emoji":"🇫🇷"},  {"country_code":"GB","phone_mask":"(99) 9999-9999","country_name":"Reino Unido","regionCode":"44","emoji":"🇬🇧"},  {"country_code":"GE","phone_mask":"(99) 9999-9999","country_name":"Geórgia","regionCode":"995","emoji":"🇬🇪"},  {"country_code":"GH","phone_mask":"(99) 9999-9999","country_name":"Gana","regionCode":"233","emoji":"🇬🇭"},  {"country_code":"GI","phone_mask":"99999","country_name":"Gibraltar","regionCode":"350","emoji":"🇬🇮"},  {"country_code":"GL","phone_mask":"99999","country_name":"Groenlândia","regionCode":"299","emoji":"🇬🇱"},  {"country_code":"GR","phone_mask":"9999-999999","country_name":"Grécia","regionCode":"30","emoji":"🇬🇷"},  {"country_code":"HR","phone_mask":"(99) 999-9999","country_name":"Croácia","regionCode":"385","emoji":"🇭🇷"},  {"country_code":"HU","phone_mask":"(99) 999-9999","country_name":"Hungria","regionCode":"36","emoji":"🇭🇺"},  {"country_code":"ID","phone_mask":"(99) 9999-9999","country_name":"Indonésia","regionCode":"62","emoji":"🇮🇩"},  {"country_code":"IE","phone_mask":"(99) 999-9999","country_name":"Irlanda","regionCode":"353","emoji":"🇮🇪"},  {"country_code":"IL","phone_mask":"99-999-9999","country_name":"Israel","regionCode":"972","emoji":"🇮🇱"},  {"country_code":"IM","phone_mask":"(99) 9999-9999","country_name":"Ilha de Man","regionCode":"44","emoji":"🇮🇲"},  {"country_code":"IN","phone_mask":"(99) 9999-9999","country_name":"Índia","regionCode":"91","emoji":"🇮🇳"},  {"country_code":"IQ","phone_mask":"(99) 9999-9999","country_name":"Iraque","regionCode":"964","emoji":"🇮🇶"},  {"country_code":"IR","phone_mask":"(9999) 9999-9999","country_name":"Irã","regionCode":"98","emoji":"🇮🇷"},{"country_code":"IS","phone_mask":"999-9999","country_name":"Islândia","regionCode":"354","emoji":"🇮🇸"},  {"country_code":"IT","phone_mask":"(99) 9999-9999","country_name":"Itália","regionCode":"39","emoji":"🇮🇹"},  {"country_code":"JP","phone_mask":"(99) 9999-9999","country_name":"Japão","regionCode":"81","emoji":"🇯🇵"},  {"country_code":"JO","phone_mask":"(99) 999-9999","country_name":"Jordânia","regionCode":"962","emoji":"🇯🇴"},  {"country_code":"KE","phone_mask":"(99) 9999-999","country_name":"Quênia","regionCode":"254","emoji":"🇰🇪"},  {"country_code":"KR","phone_mask":"(99) 999-9999","country_name":"Coreia do Sul","regionCode":"82","emoji":"🇰🇷"},  {"country_code":"KZ","phone_mask":"(999) 999-9999","country_name":"Cazaquistão","regionCode":"7","emoji":"🇰🇿"},  {"country_code":"LB","phone_mask":"(99) 999-999","country_name":"Líbano","regionCode":"961","emoji":"🇱🇧"},  {"country_code":"LI","phone_mask":"999 9999","country_name":"Liechtenstein","regionCode":"423","emoji":"🇱🇮"},  {"country_code":"LT","phone_mask":"(999) 99999","country_name":"Lituânia","regionCode":"370","emoji":"🇱🇹"},  {"country_code":"LU","phone_mask":"999-999","country_name":"Luxemburgo","regionCode":"352","emoji":"🇱🇺"},  {"country_code":"LV","phone_mask":"9999-9999","country_name":"Letônia","regionCode":"371","emoji":"🇱🇻"},  {"country_code":"MA","phone_mask":"9999-99999","country_name":"Marrocos","regionCode":"212","emoji":"🇲🇦"},  {"country_code":"MC","phone_mask":"99-99-99-99","country_name":"Mônaco","regionCode":"377","emoji":"🇲🇨"},  {"country_code":"MD","phone_mask":"999-9999","country_name":"Moldávia","regionCode":"373","emoji":"🇲🇩"},  {"country_code":"ME","phone_mask":"99-99-9999","country_name":"Montenegro","regionCode":"382","emoji":"🇲🇪"},  {"country_code":"MK","phone_mask":"99-999-999","country_name":"Macedônia do Norte","regionCode":"389","emoji":"🇲🇰"},  {"country_code":"MM","phone_mask":"9999-9999","country_name":"Mianmar","regionCode":"95","emoji":"🇲🇲"},  {"country_code":"MT","phone_mask":"9999-9999","country_name":"Malta","regionCode":"356","emoji":"🇲🇹"},  {"country_code":"MX","phone_mask":"(999) 999-9999","country_name":"México","regionCode":"52","emoji":"🇲🇽"},  {"country_code":"MY","phone_mask":"9999-9999","country_name":"Malásia","regionCode":"60","emoji":"🇲🇾"},  {"country_code":"MZ","phone_mask":"99-999-9999","country_name":"Moçambique","regionCode":"258","emoji":"🇲🇿"},  {"country_code":"NG","phone_mask":"9999-9999","country_name":"Nigéria","regionCode":"234","emoji":"🇳🇬"},  {"country_code":"NL","phone_mask":"(99) 999-9999","country_name":"Países Baixos","regionCode":"31","emoji":"🇳🇱"},  {"country_code":"NO","phone_mask":"999-999-99","country_name":"Noruega","regionCode":"47","emoji":"🇳🇴"},  {"country_code":"NP","phone_mask":"99-999-999","country_name":"Nepal","regionCode":"977","emoji":"🇳🇵"},  {"country_code":"NZ","phone_mask":"9-9999-9999","country_name":"Nova Zelândia","regionCode":"64","emoji":"🇳🇿"},  {"country_code":"PA","phone_mask":"9999-9999","country_name":"Panamá","regionCode":"507","emoji":"🇵🇦"},  {"country_code":"PE","phone_mask":"999-999999","country_name":"Peru","regionCode":"51","emoji":"🇵🇪"},  {"country_code":"PH","phone_mask":"(99) 9999-9999","country_name":"Filipinas","regionCode":"63","emoji":"🇵🇭"},  {"country_code":"PK","phone_mask":"(999) 9999999","country_name":"Paquistão","regionCode":"92","emoji":"🇵🇰"},  {"country_code":"PL","phone_mask":"999-999-999","country_name":"Polônia","regionCode":"48","emoji":"🇵🇱"},  {"country_code":"PT","phone_mask":"999-999-999","country_name":"Portugal","regionCode":"351","emoji":"🇵🇹"},  {"country_code":"PY","phone_mask":"(99) 999-9999","country_name":"Paraguai","regionCode":"595","emoji":"🇵🇾"},  {"country_code":"RO","phone_mask":"(99) 999-9999","country_name":"Romênia","regionCode":"40","emoji":"🇷🇴"},  {"country_code":"RS","phone_mask":"(99) 999-9999","country_name":"Sérvia","regionCode":"381","emoji":"🇷🇸"},  {"country_code":"RU","phone_mask":"999-999-99-99","country_name":"Rússia","regionCode":"7","emoji":"🇷🇺"},  {"country_code":"SA","phone_mask":"999-999-9999","country_name":"Arábia Saudita","regionCode":"966","emoji":"🇸🇦"},  {"country_code":"SD","phone_mask":"99999999","country_name":"Sudão","regionCode":"249","emoji":"🇸🇩"},  {"country_code":"SE","phone_mask":"99-999-99-99","country_name":"Suécia","regionCode":"46","emoji":"🇸🇪"},  {"country_code":"SG","phone_mask":"9999-9999","country_name":"Singapura","regionCode":"65","emoji":"🇸🇬"},  {"country_code":"SI","phone_mask":"99-999-999","country_name":"Eslovênia","regionCode":"386","emoji":"🇸🇮"},  {"country_code":"SK","phone_mask":"99-9999-999","country_name":"Eslováquia","regionCode":"421","emoji":"🇸🇰"},  {"country_code":"SM","phone_mask":"999-999-999","country_name":"San Marino","regionCode":"378","emoji":"🇸🇲"},  {"country_code":"SO","phone_mask":"99999999","country_name":"Somália","regionCode":"252","emoji":"🇸🇴"},  {"country_code":"SY","phone_mask":"9999-9999","country_name":"Síria","regionCode":"963","emoji":"🇸🇾"},  {"country_code":"TH","phone_mask":"(99) 999-9999","country_name":"Tailândia","regionCode":"66","emoji":"🇹🇭"},  {"country_code":"TN","phone_mask":"(99) 999-999","country_name":"Tunísia","regionCode":"216","emoji":"🇹🇳"},  {"country_code":"TR","phone_mask":"(999) 999-9999","country_name":"Turquia","regionCode":"90","emoji":"🇹🇷"},  {"country_code":"TZ","phone_mask":"999-999-999","country_name":"Tanzânia","regionCode":"255","emoji":"🇹🇿"},  {"country_code":"UA","phone_mask":"99-999-99-99","country_name":"Ucrânia","regionCode":"380","emoji":"🇺🇦"},  {"country_code":"UG","phone_mask":"999-999-999","country_name":"Uganda","regionCode":"256","emoji":"🇺🇬"},  {"country_code":"US","phone_mask":"(999) 999-9999","country_name":"Estados Unidos","regionCode":"1","emoji":"🇺🇸"},  {"country_code":"UY","phone_mask":"9999-9999","country_name":"Uruguai","regionCode":"598","emoji":"🇺🇾"},  {"country_code":"VA","phone_mask":"(9999) 9999-9999","country_name":"Cidade do Vaticano","regionCode":"39","emoji":"🇻🇦"},  {"country_code":"VE","phone_mask":"(99) 999-9999","country_name":"Venezuela","regionCode":"58","emoji":"🇻🇪"},  {"country_code":"VN","phone_mask":"(99) 9999-9999","country_name":"Vietnã","regionCode":"84","emoji":"🇻🇳"},  {"country_code":"XK","phone_mask":"(99) 999-999","country_name":"Kosovo","regionCode":"383","emoji":"🇽🇰"},  {"country_code":"ZM","phone_mask":"(99) 999-9999","country_name":"Zâmbia","regionCode":"260","emoji":"🇿🇲"},  {"country_code":"ZW","phone_mask":"(99) 999-9999","country_name":"Zimbábue","regionCode":"263","emoji":"🇿🇼"}
];

const Startupsummit = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const ddiRef = useRef<HTMLSelectElement | null>(null);

  const getCountryMask = (regionCode: string) => {
    const country = countryList2.find((c) => c.regionCode === regionCode);
    return country ? country.phone_mask : '(99) 99999-9999';
  };

  useEffect(() => {
    const phoneInput = phoneRef.current;
    const emailInput = emailRef.current;
    const nameInput = nameRef.current;
    const ddiSelect = ddiRef.current;
    const form = formRef.current;

    if (!phoneInput || !ddiSelect || !form) return;

    const applyMask = (input: HTMLInputElement, mask: string) => {
      let i = 0;
      const val = input.value.replace(/\D/g, '');
      input.value = mask.replace(/9/g, () => val[i++] || '');
    };

    const updatePlaceholder = (input: HTMLInputElement, mask: string) => {
      input.placeholder = mask.replace(/9/g, '0');
    };

    const maskPhone = (event: InputEvent) => {
      if (
        event.inputType &&
        (event.inputType === 'deleteContentBackward' || event.inputType === 'deleteContentForward')
      ) {
        return;
      }

      if (phoneInput.value.trim() === '') {
        phoneInput.value = '';
        return;
      }

      const mask = getCountryMask(ddiSelect.value);
      applyMask(phoneInput, mask);
      updatePlaceholder(phoneInput, mask);
      const phoneWithDdi = `+${ddiSelect.value}${phoneInput.value.replace(/\D/g, '')}`;
      phoneInput.dataset.phoneWithDdi = phoneWithDdi;
    };

    // Initialize placeholder
    updatePlaceholder(phoneInput, getCountryMask(ddiSelect.value));

    const onDdiChange = () => {
      const initialMask = getCountryMask(ddiSelect.value);
      if (initialMask) updatePlaceholder(phoneInput, initialMask);
      phoneInput.dispatchEvent(new Event('input', { bubbles: true }));
    };

    const onFormSubmit = (e: Event) => {
      const phoneWithDdi = phoneInput.dataset.phoneWithDdi || `+${ddiSelect.value}${phoneInput.value.replace(/\D/g, '')}`;
      // Ensure phone field contains the value with DDI for submission
      phoneInput.value = phoneWithDdi;

      // The form will submit naturally to its action URL.
      // The n8n webhook is expected to handle the redirection based on the 'redirect_url' hidden input.

      // Clear form fields after submission, as per new script
      setTimeout(() => {
        if (phoneInput) phoneInput.value = '';
        if (nameInput) nameInput.value = '';
        if (emailInput) emailInput.value = '';
      }, 500);
    };

    phoneInput.addEventListener('input', maskPhone as any);
    ddiSelect.addEventListener('change', onDdiChange);
    form.addEventListener('submit', onFormSubmit as EventListener);

    // Handle origin_query hidden input
    const queryParams = new URLSearchParams(window.location.search);
    const paramsObj: Record<string, string> = {};
    for (const [key, value] of queryParams) paramsObj[key] = value;
    if (Object.keys(paramsObj).length > 0) {
      let existingInput = form.querySelector('input[name="origin_query"]') as HTMLInputElement | null;
      if (!existingInput) {
        existingInput = document.createElement('input');
        existingInput.type = 'hidden';
        existingInput.name = 'origin_query';
        form.appendChild(existingInput);
      }
      existingInput.value = JSON.stringify(paramsObj);
    }

    return () => {
      phoneInput.removeEventListener('input', maskPhone as any);
      ddiSelect.removeEventListener('change', onDdiChange);
      form.removeEventListener('submit', onFormSubmit as EventListener);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl leading-tight">
            <span className="block xl:inline">Transforme Suas Vendas com a </span>{' '}
            <span className="block text-[#16B763] xl:inline">followop!</span>
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-5 sm:text-2xl">
            A plataforma que impulsiona seu crescimento e otimiza seu processo de vendas.
          </p>
        </div>

        <style>{`
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
          .container_html { transition: width 0.5s; }
          @media (max-width: 600px) {
            .container_html { width: 100% !important; }
          }
          .form-group-2 input[type="tel"] {
            flex: 1;
            border-radius: 0 .25rem .25rem 0;
            height: 100%;
          }
        `}</style>

        <form
          ref={formRef}
          method="post"
          action="https://n8n.comea.com.br/webhook/webhook_wm2zslsc"
          acceptCharset="UTF-8"
        >
          <meta charSet="UTF-8" />
          <div className="container_html" style={{ width: '100%' }}>
            <input type="hidden" name="event" value="invoice_open" />
            <input type="hidden" name="flowId" value="flow_1756401147656" />
            <div style={{ marginBottom: '1rem' }}>
              <input
                ref={nameRef}
                type="text"
                id="name-2"
                name="name"
                defaultValue=""
                placeholder="Insira seu nome"
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '.375rem .75rem',
                  fontSize: '1rem',
                  fontWeight: 400,
                  lineHeight: 1.5,
                  color: '#212529',
                  backgroundColor: '#fff',
                  border: '1px solid #ced4da',
                  borderRadius: '.25rem',
                }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <input
                ref={emailRef}
                type="email"
                id="email-2"
                name="email"
                defaultValue=""
                placeholder="Insira seu melhor e-mail"
                required
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '0.54rem',
                  fontSize: '1rem',
                  fontWeight: 400,
                  lineHeight: 1.5,
                  color: '#212529',
                  backgroundColor: '#fff',
                  border: '1px solid #ced4da',
                  borderRadius: '.25rem',
                }}
              />
            </div>

            <div className="form-group-2">
              <select className="form-control" id="ddi-2" ref={ddiRef} defaultValue="55">
                {countryList2.map((c) => (
                  <option key={`${c.regionCode}-${c.country_code}`} value={c.regionCode}>
                    {c.emoji} +{c.regionCode}
                  </option>
                ))}
              </select>
              <input
                ref={phoneRef}
                data-phone-with-ddi=""
                type="tel"
                id="tel-2"
                name="phone"
                maxLength={15}
                placeholder="(00) 00000-0000"
                required
                style={{
                  flex: 1,
                  padding: '.375rem .75rem',
                  fontSize: '1rem',
                  fontWeight: 400,
                  lineHeight: 1.5,
                  color: '#212529',
                  backgroundColor: '#fff',
                  border: '1px solid #ced4da',
                  borderRadius: '0 .25rem .25rem 0',
                }}
              />
            </div>
            <input type="hidden" name="redirect_url" value="https://lp.followop.com.br/?name={name}&email={email}&phone={phone}&phonenumber={phone}" />
            <textarea name="popup_opening_text" style={{ display: 'none' }} defaultValue="Oi {name}, vi que você está buscando aumentar suas vendas com IA no Whatsapp.&#10;Posso entender melhor sua operação em uma reunião rápida?&#10;&#10;Me confirme se esse é seu email {email}?"></textarea>
            <input type="hidden" name="popup_opening_time" value="3" />
            <input
              type="submit"
              value="CONTINUAR"
              style={{
                display: 'block',
                width: '100%',
                lineHeight: 1.5,
                textAlign: 'center',
                textDecoration: 'none',
                verticalAlign: 'middle',
                cursor: 'pointer',
                fontSize: '1rem',
                marginTop: 20,
                fontWeight: 700,
                textTransform: 'uppercase',
                textShadow: '0 0 2px rgb(0 0 0 / 80%)',
                padding: 13,
                backgroundColor: '#16B763',
                color: '#fff',
                borderRadius: 15,
                boxShadow: '0 -1px 24px 0 #16b763',
                border: '1px solid transparent',
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Startupsummit;
