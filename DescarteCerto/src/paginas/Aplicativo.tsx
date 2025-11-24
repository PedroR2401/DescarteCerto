import "./css/Aplicativo.css";
import qrcode from "../images/qrcode.png";
import googleplay from "../images/googleplay.png";

export default function AppInfo() {
  return (
    <section className="appinfo-container">

      {/* BLOCO SUPERIOR */}
      <div className="appinfo-topo">
        
        {/* TEXTO */}
        <div className="appinfo-texto">
          <h2 className="appinfo-titulo">Conheça nosso aplicativo</h2>

          <p className="appinfo-paragrafo">
            Com o aplicativo Descarte Certo, você transforma atitudes em impacto!
          </p>

          <p className="appinfo-paragrafo">
            Descubra o que está sendo doado na sua cidade, encontre os pontos corretos 
            de descarte e ajude a identificar locais com lixo jogado indevidamente. 
            Tudo isso de forma rápida, simples e acessível.
          </p>

          <p className="appinfo-paragrafo">
            Cada função do app foi pensada para facilitar a vida do cidadão consciente, 
            promovendo uma comunidade mais solidária e respeitosa com o planeta.
          </p>

          <p className="appinfo-paragrafo">
            Conecte solidariedade e cuidado ambiental com apenas alguns cliques. Doe, 
            informe e contribua para uma cidade mais limpa e consciente. Baixe agora o 
            app Descarte Certo e seja protagonista dessa transformação. O planeta agradece, 
            e a comunidade também!
          </p>
        </div>

        {/* IMAGEM DO APP */}
        <img
          src="/assets/app/app-mockup.png"
          alt="Aplicativo Descarte Certo"
          className="appinfo-img"
        />
      </div>

      {/* BLOCO QR CODE */}
      <div className="appinfo-qrcode-container">
        {/* CENTRO */}
        <div className="appinfo-qrcode-centro">
          <h3 className="appinfo-subtitulo">Já disponível para Download</h3>

          <img 
            src={qrcode} 
            alt="QR Code" 
            className="appinfo-qrcode"
          />

          <img
            src={googleplay}
            alt="Google Play"
            className="appinfo-googleplay"
          />
        </div>
      </div>

    </section>
  );
}
