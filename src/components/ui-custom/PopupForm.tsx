import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const countryList = [{"country_code":"AD","phone_mask":"999-999","country_name":"Andorra","regionCode":"376","emoji":"🇦🇩"},{"country_code":"AE","phone_mask":"(99) 999-9999","country_name":"Emirados Árabes Unidos","regionCode":"971","emoji":"🇦🇪"},{"country_code":"AF","phone_mask":"(99) 999-9999","country_name":"Afeganistão","regionCode":"93","emoji":"🇦🇫"},{"country_code":"AL","phone_mask":"(99) 999-9999","country_name":"Albânia","regionCode":"355","emoji":"🇦🇱"},{"country_code":"AM","phone_mask":"(99) 999-9999","country_name":"Armênia","regionCode":"374","emoji":"🇦🇲"},{"country_code":"AO","phone_mask":"(99) 999-9999","country_name":"Angola","regionCode":"244","emoji":"🇦🇴"},{"country_code":"AR","phone_mask":"(99) 9999-9999","country_name":"Argentina","regionCode":"54","emoji":"🇦🇷"},{"country_code":"AT","phone_mask":"(9) 9999-9999","country_name":"Áustria","regionCode":"43","emoji":"🇦🇹"},{"country_code":"AU","phone_mask":"(99) 9999-9999","country_name":"Austrália","regionCode":"61","emoji":"🇦🇺"},{"country_code":"AZ","phone_mask":"(99) 999-9999","country_name":"Azerbaijão","regionCode":"994","emoji":"🇦🇿"},{"country_code":"BA","phone_mask":"(99) 999-999","country_name":"Bósnia e Herzegovina","regionCode":"387","emoji":"🇧🇦"},{"country_code":"BD","phone_mask":"(99) 9999-9999","country_name":"Bangladesh","regionCode":"880","emoji":"🇧🇩"},{"country_code":"BE","phone_mask":"(99) 999-99-99","country_name":"Bélgica","regionCode":"32","emoji":"🇧🇪"},{"country_code":"BG","phone_mask":"(999) 999-999","country_name":"Bulgária","regionCode":"359","emoji":"🇧🇬"},{"country_code":"BH","phone_mask":"9999-9999","country_name":"Butão","regionCode":"975","emoji":"🇧🇹"},{"country_code":"BJ","phone_mask":"9999-99999","country_name":"Benim","regionCode":"229","emoji":"🇧🇯"},{"country_code":"BO","phone_mask":"(9) 999-9999","country_name":"Bolívia","regionCode":"591","emoji":"🇧🇴"},{"country_code":"BR","phone_mask":"(99) 99999-9999","country_name":"Brasil","regionCode":"55","selected":true,"emoji":"🇧🇷"},{"country_code":"BY","phone_mask":"(99) 999-99-99","country_name":"Belarus","regionCode":"375","emoji":"🇧🇾"},{"country_code":"CA","phone_mask":"(999) 999-9999","country_name":"Canadá","regionCode":"1","emoji":"🇨🇦"},{"country_code":"CD","phone_mask":"(99) 999-9999","country_name":"República Democrática do Congo","regionCode":"243","emoji":"🇨🇩"},{"country_code":"CH","phone_mask":"(99) 999-99-99","country_name":"Suíça","regionCode":"41","emoji":"🇨🇭"},{"country_code":"CI","phone_mask":"(99) 99-99-99","country_name":"Costa do Marfim","regionCode":"225","emoji":"🇨🇮"},{"country_code":"CL","phone_mask":"(99) 9999-9999","country_name":"Chile","regionCode":"56","emoji":"🇨🇱"},{"country_code":"CM","phone_mask":"(99) 9999-9999","country_name":"Camarões","regionCode":"237","emoji":"🇨🇲"},{"country_code":"CO","phone_mask":"(9) 999-9999","country_name":"Colômbia","regionCode":"57","emoji":"🇨🇴"},{"country_code":"CV","phone_mask":"(99) 999-9999","country_name":"Cabo Verde","regionCode":"238","emoji":"🇨🇻"},{"country_code":"CY","phone_mask":"9999-9999","country_name":"Chipre","regionCode":"357","emoji":"🇨🇾"},{"country_code":"CZ","phone_mask":"999-999-999","country_name":"República Tcheca","regionCode":"420","emoji":"🇨🇿"},{"country_code":"DE","phone_mask":"(99) 9999-9999","country_name":"Alemanha","regionCode":"49","emoji":"🇩🇪"},{"country_code":"DK","phone_mask":"(99) 9999-9999","country_name":"Dinamarca","regionCode":"45","emoji":"🇩🇰"},{"country_code":"DO","phone_mask":"(999) 999-9999","country_name":"República Dominicana","regionCode":"1","emoji":"🇩🇴"},{"country_code":"EC","phone_mask":"(99) 999-9999","country_name":"Equador","regionCode":"593","emoji":"🇪🇨"},{"country_code":"EE","phone_mask":"(99) 9999-9999","country_name":"Estônia","regionCode":"372","emoji":"🇪🇪"},{"country_code":"EG","phone_mask":"(99) 9999-9999","country_name":"Egito","regionCode":"20","emoji":"🇪🇬"},{"country_code":"ES","phone_mask":"999-999-999","country_name":"Espanha","regionCode":"34","emoji":"🇪🇸"},{"country_code":"ET","phone_mask":"999-999-999","country_name":"Etiópia","regionCode":"251","emoji":"🇪🇹"},{"country_code":"FI","phone_mask":"999-999-999","country_name":"Finlândia","regionCode":"358","emoji":"🇫🇮"},{"country_code":"FO","phone_mask":"999999","country_name":"Ilhas Faroé","regionCode":"298","emoji":"🇫🇴"},{"country_code":"FR","phone_mask":"(99) 9999-9999","country_name":"França","regionCode":"33","emoji":"🇫🇷"},{"country_code":"GB","phone_mask":"(99) 9999-9999","country_name":"Reino Unido","regionCode":"44","emoji":"🇬🇧"},{"country_code":"GE","phone_mask":"(99) 9999-9999","country_name":"Geórgia","regionCode":"995","emoji":"🇬🇪"},{"country_code":"GH","phone_mask":"(99) 9999-9999","country_name":"Gana","regionCode":"233","emoji":"🇬🇭"},{"country_code":"GI","phone_mask":"99999","country_name":"Gibraltar","regionCode":"350","emoji":"🇬🇮"},{"country_code":"GL","phone_mask":"99999","country_name":"Groenlândia","regionCode":"299","emoji":"🇬🇱"},{"country_code":"GR","phone_mask":"9999-999999","country_name":"Grécia","regionCode":"30","emoji":"🇬🇷"},{"country_code":"HR","phone_mask":"(99) 999-9999","country_name":"Croácia","regionCode":"385","emoji":"🇭🇷"},{"country_code":"HU","phone_mask":"(99) 999-9999","country_name":"Hungria","regionCode":"36","emoji":"🇭🇺"},{"country_code":"ID","phone_mask":"(99) 9999-9999","country_name":"Indonésia","regionCode":"62","emoji":"🇮🇩"},{"country_code":"IE","phone_mask":"(99) 999-9999","country_name":"Irlanda","regionCode":"353","emoji":"🇮🇪"},{"country_code":"IL","phone_mask":"99-999-9999","country_name":"Israel","regionCode":"972","emoji":"🇮🇱"},{"country_code":"IM","phone_mask":"(99) 9999-9999","country_name":"Ilha de Man","regionCode":"44","emoji":"🇮🇲"},{"country_code":"IN","phone_mask":"(99) 9999-9999","country_name":"Índia","regionCode":"91","emoji":"🇮🇳"},{"country_code":"IQ","phone_mask":"(99) 9999-9999","country_name":"Iraque","regionCode":"964","emoji":"🇮🇶"},{"country_code":"IR","phone_mask":"(9999) 9999-9999","country_name":"Irã","regionCode":"98","emoji":"🇮🇷"},{"country_code":"IS","phone_mask":"999-9999","country_name":"Islândia","regionCode":"354","emoji":"🇮🇸"},{"country_code":"IT","phone_mask":"(99) 9999-9999","country_name":"Itália","regionCode":"39","emoji":"🇮🇹"},{"country_code":"JP","phone_mask":"(99) 9999-9999","country_name":"Japão","regionCode":"81","emoji":"🇯🇵"},{"country_code":"JO","phone_mask":"(99) 999-9999","country_name":"Jordânia","regionCode":"962","emoji":"🇯🇴"},{"country_code":"KE","phone_mask":"(99) 9999-999","country_name":"Quênia","regionCode":"254","emoji":"🇰🇪"},{"country_code":"KR","phone_mask":"(99) 999-9999","country_name":"Coreia do Sul","regionCode":"82","emoji":"🇰🇷"},{"country_code":"KZ","phone_mask":"(999) 999-9999","country_name":"Cazaquistão","regionCode":"7","emoji":"🇰🇿"},{"country_code":"LB","phone_mask":"(99) 999-999","country_name":"Líbano","regionCode":"961","emoji":"🇱🇧"},{"country_code":"LI","phone_mask":"999 9999","country_name":"Liechtenstein","regionCode":"423","emoji":"🇱🇮"},{"country_code":"LT","phone_mask":"(999) 99999","country_name":"Lituânia","regionCode":"370","emoji":"🇱🇹"},{"country_code":"LU","phone_mask":"999-999","country_name":"Luxemburgo","regionCode":"352","emoji":"🇱🇺"},{"country_code":"LV","phone_mask":"9999-9999","country_name":"Letônia","regionCode":"371","emoji":"🇱🇻"},{"country_code":"MA","phone_mask":"9999-99999","country_name":"Marrocos","regionCode":"212","emoji":"🇲🇦"},{"country_code":"MC","phone_mask":"99-99-99-99","country_name":"Mônaco","regionCode":"377","emoji":"🇲🇨"},{"country_code":"MD","phone_mask":"999-9999","country_name":"Moldávia","regionCode":"373","emoji":"🇲🇩"},{"country_code":"ME","phone_mask":"99-99-9999","country_name":"Montenegro","regionCode":"382","emoji":"🇲🇪"},{"country_code":"MK","phone_mask":"99-999-999","country_name":"Macedônia do Norte","regionCode":"389","emoji":"🇲🇰"},{"country_code":"MM","phone_mask":"9999-9999","country_name":"Mianmar","regionCode":"95","emoji":"🇲🇲"},{"country_code":"MT","phone_mask":"9999-9999","country_name":"Malta","regionCode":"356","emoji":"🇲🇹"},{"country_code":"MX","phone_mask":"(999) 999-9999","country_name":"México","regionCode":"52","emoji":"🇲🇽"},{"country_code":"MY","phone_mask":"9999-9999","country_name":"Malásia","regionCode":"60","emoji":"🇲🇾"},{"country_code":"MZ","phone_mask":"99-999-9999","country_name":"Moçambique","regionCode":"258","emoji":"🇲🇿"},{"country_code":"NG","phone_mask":"9999-9999","country_name":"Nigéria","regionCode":"234","emoji":"🇳🇬"},{"country_code":"NL","phone_mask":"(99) 999-9999","country_name":"Países Baixos","regionCode":"31","emoji":"🇳🇱"},{"country_code":"NO","phone_mask":"999-999-99","country_name":"Noruega","regionCode":"47","emoji":"🇳🇴"},{"country_code":"NP","phone_mask":"99-999-999","country_name":"Nepal","regionCode":"977","emoji":"🇳🇵"},{"country_code":"NZ","phone_mask":"9-9999-9999","country_name":"Nova Zelândia","regionCode":"64","emoji":"🇳🇿"},{"country_code":"PA","phone_mask":"9999-9999","country_name":"Panamá","regionCode":"507","emoji":"🇵🇦"},{"country_code":"PE","phone_mask":"999-999999","country_name":"Peru","regionCode":"51","emoji":"🇵🇪"},{"country_code":"PH","phone_mask":"(99) 9999-9999","country_name":"Filipinas","regionCode":"63","emoji":"🇵🇭"},{"country_code":"PK","phone_mask":"(999) 9999999","country_name":"Paquistão","regionCode":"92","emoji":"🇵🇰"},{"country_code":"PL","phone_mask":"999-999-999","country_name":"Polônia","regionCode":"48","emoji":"🇵🇱"},{"country_code":"PT","phone_mask":"999-999-999","country_name":"Portugal","regionCode":"351","emoji":"🇵🇹"},{"country_code":"PY","phone_mask":"(99) 999-9999","country_name":"Paraguai","regionCode":"595","emoji":"🇵🇾"},{"country_code":"RO","phone_mask":"(99) 999-9999","country_name":"Romênia","regionCode":"40","emoji":"🇷🇴"},{"country_code":"RS","phone_mask":"(99) 999-9999","country_name":"Sérvia","regionCode":"381","emoji":"🇷🇸"},{"country_code":"RU","phone_mask":"999-999-99-99","country_name":"Rússia","regionCode":"7","emoji":"🇷🇺"},{"country_code":"SA","phone_mask":"999-999-9999","country_name":"Arábia Saudita","regionCode":"966","emoji":"🇸🇦"},{"country_code":"SD","phone_mask":"99999999","country_name":"Sudão","regionCode":"249","emoji":"🇸🇩"},{"country_code":"SE","phone_mask":"99-999-99-99","country_name":"Suécia","regionCode":"46","emoji":"🇸🇪"},{"country_code":"SG","phone_mask":"9999-9999","country_name":"Singapura","regionCode":"65","emoji":"🇸🇬"},{"country_code":"SI","phone_mask":"99-999-999","country_name":"Eslovênia","regionCode":"386","emoji":"🇸🇮"},{"country_code":"SK","phone_mask":"99-9999-999","country_name":"Eslováquia","regionCode":"421","emoji":"🇸🇰"},{"country_code":"SM","phone_mask":"999-999-999","country_name":"San Marino","regionCode":"378","emoji":"🇸🇲"},{"country_code":"SO","phone_mask":"99999999","country_name":"Somália","regionCode":"252","emoji":"🇸🇴"},{"country_code":"SY","phone_mask":"9999-9999","country_name":"Síria","regionCode":"963","emoji":"🇸🇾"},{"country_code":"TH","phone_mask":"(99) 999-9999","country_name":"Tailândia","regionCode":"66","emoji":"🇹🇭"},{"country_code":"TN","phone_mask":"(99) 999-999","country_name":"Tunísia","regionCode":"216","emoji":"🇹🇳"},{"country_code":"TR","phone_mask":"(999) 999-9999","country_name":"Turquia","regionCode":"90","emoji":"🇹🇷"},{"country_code":"TZ","phone_mask":"999-999-999","country_name":"Tanzânia","regionCode":"255","emoji":"🇹🇿"},{"country_code":"UA","phone_mask":"99-999-99-99","country_name":"Ucrânia","regionCode":"380","emoji":"🇺🇦"},{"country_code":"UG","phone_mask":"999-999-999","country_name":"Uganda","regionCode":"256","emoji":"🇺🇬"},{"country_code":"US","phone_mask":"(999) 999-9999","country_name":"Estados Unidos","regionCode":"1","emoji":"🇺🇸"},{"country_code":"UY","phone_mask":"9999-9999","country_name":"Uruguai","regionCode":"598","emoji":"🇺🇾"},{"country_code":"VA","phone_mask":"(9999) 9999-9999","country_name":"Cidade do Vaticano","regionCode":"39","emoji":"🇻🇦"},{"country_code":"VE","phone_mask":"(99) 999-9999","country_name":"Venezuela","regionCode":"58","emoji":"🇻🇪"},{"country_code":"VN","phone_mask":"(99) 9999-9999","country_name":"Vietnã","regionCode":"84","emoji":"🇻🇳"},{"country_code":"XK","phone_mask":"(99) 999-999","country_name":"Kosovo","regionCode":"383","emoji":"🇽🇰"},{"country_code":"ZM","phone_mask":"(99) 999-9999","country_name":"Zâmbia","regionCode":"260","emoji":"🇿🇲"},{"country_code":"ZW","phone_mask":"(99) 999-9999","country_name":"Zimbábue","regionCode":"263","emoji":"🇿🇼"}];

const PopupForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [ddi, setDdi] = useState('55');
  const [phoneMask, setPhoneMask] = useState('(99) 99999-9999');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const country = countryList.find(c => c.regionCode === ddi);
    if (country) {
      setPhoneMask(country.phone_mask);
    }
  }, [ddi]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    let maskedValue = '';
    let maskIndex = 0;
    for (let i = 0; i < phoneMask.length && maskIndex < value.length; i++) {
      if (phoneMask[i] === '9') {
        maskedValue += value[maskIndex];
        maskIndex++;
      } else {
        maskedValue += phoneMask[i];
      }
    }
    setPhone(maskedValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullPhone = `+${ddi}${phone.replace(/\D/g, '')}`;
    
    if (formRef.current) {
        const formData = new FormData(formRef.current);
        formData.set('phone', fullPhone);

        const hiddenPhoneInput = document.createElement('input');
        hiddenPhoneInput.type = 'hidden';
        hiddenPhoneInput.name = 'phone';
        hiddenPhoneInput.value = fullPhone;
        formRef.current.appendChild(hiddenPhoneInput);

        formRef.current.submit();
    }
  };

  return (
    <form
      ref={formRef}
      method="post"
      action="https://n8n.comea.com.br/webhook/webhook_wm2zslsc"
      acceptCharset="UTF-8"
      onSubmit={handleSubmit}
      className="space-y-4 w-full max-w-full"
    >
        <input type="hidden" name="event" value="invoice_open" />
        <input type="hidden" name="flowId" value="flow_1755532673213" />
        <input type="hidden" name="redirect_url" value={`https://lp.followop.com.br/startupsummit?name=${name}&email=${email}&phone=${`+${ddi}${phone.replace(/\D/g, '')}`}&phonenumber=${`+${ddi}${phone.replace(/\D/g, '')}`}`} />
        <textarea name="popup_opening_text" style={{ display: 'none' }}>{`Oi ${name}, vamos turbinar suas vendas com a followop!`}</textarea>
        <input type="hidden" name="popup_opening_time" value="1" />

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="name">Nome</Label>
        <Input type="text" id="name" name="name" placeholder="Insira seu nome" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" placeholder="Insira seu melhor e-mail" required value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="phone">Telefone</Label>
        <div className="flex flex-col xs:flex-row gap-2 w-full items-center">
          <Select value={ddi} onValueChange={setDdi}>
            <SelectTrigger className="w-full xs:w-[120px] flex-shrink-0">
              <SelectValue placeholder="DDI" />
            </SelectTrigger>
            <SelectContent>
              {countryList.map((country) => (
                <SelectItem key={country.country_code} value={country.regionCode}>
                  {country.emoji} +{country.regionCode}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            type="tel"
            id="phone"
            name="phone_display"
            placeholder={phoneMask}
            value={phone}
            onChange={handlePhoneChange}
            className="flex-1 w-full"
            autoComplete="tel"
          />
        </div>
      </div>
      <Button type="submit" className="w-full mt-2" variant="apple">
        Turbinar minhas vendas
      </Button>
    </form>
  );
};

export default PopupForm;
