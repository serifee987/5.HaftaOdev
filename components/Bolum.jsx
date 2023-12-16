import './style.css'

function Bolum(){
const styles={
    divStyle:{fontFamily:'Cursive',paddingLeft:"20px"}
}
    return(
    <>

        <div class="container">
            <div class="row">
                
                <div class="col" style={styles.divStyle}>  
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ben Kimim?<br />
                     💍 &nbsp;&nbsp;&nbsp;&nbsp;Evli <br />
                     👨‍👩‍👧‍👦&nbsp;&nbsp;İki çocuk annesi <br />
                     🎂&nbsp;&nbsp;&nbsp;36 yaşında <br />
                     🙃&nbsp;&nbsp;&nbsp;Bir ev hanımıyım.
                    
                </div>
                <div class="col" style={styles.divStyle}>
                Yeteneklerim ve Hobilerim...<br/>
                💻&nbsp;SPSS, MATLAB, C, C++, HTML
                 <br/>📚&nbsp; Kitap okumak
                 <br/> 👩‍🍳&nbsp;Yemek yapmak
                 <br/> 💎&nbsp;Doğal taşlar, takı tasarımı, kazaziye
                 <br/> 🏫&nbsp;Öğrenmek, öğrenmek, öğrenmek...  


                </div>
            </div>
            <hr />
            <div class="row">
                
                <div class="col" style={styles.divStyle}>  
                Eğitim Hayatım...  <br />
                <br/>👩‍🎓 Ön Lisans: Selçuk Üniversitesi Teknik Bilimler Meslek Yüksekokulu 
                Bilgisayar Teknolojileri ve Programlama Bölümü (2007)           
                <br/><br />👩‍🎓 Lisans: Selçuk Üniversitesi Fen Fakültesi İstatistik Bölümü (2010)
                <br/><br />👩‍🎓 Yüksek Lisans: Necmettin Erbakan Üniversitesi Fen Bilimleri Enstitüsü 
                İstatistik Ana Bilim Dalı (2021)
                </div>
                <div class="col" style={styles.divStyle}>
                Neler Yaptım ve Yapıyorum?
                <br/><br/>Ben evli ve iki çocuk annesi bir ev hanımıyım.
                Ev hanımı ve anne olmanın gereklerini yerine getirmenin dışında çeşitli hobilere 
                ve -tabi mesleğimi unutmamak için- devamlı öğrenmeye vakit ayırıyorum. Kimi zaman özel ders vermek, kimi zaman da 
                istastiksel analiz yapmak gibi kısa süreli 
                işler ile meşgul olmuş olsam da tam profesyonel bir iş hayatım hiç olmadı.
                Şu anda da Üretken Akademi'nin Mega Yazılım Akademisi 
                kapsamında vermiş olduğu web tasarımı kursu öğrencisiyim.
                Anlayacağınız öğrenmeye devam...  
                </div>
                          
            </div>
                <hr />
             
        </div>
        <div class="container">
        <div style={styles.divStyle}>
                Bana nasıl ulaşabilirsiniz?<br/>
               <div class="row">
                  <div class="col">
                    <a href="https://github.com/serifee987">GitHub</a>
                  </div>
                  <div class="col">
                    <a href="https://www.linkedin.com/in/serife-e-4753b129b/">LinkedIn</a>
                  </div>
                  <div class="col">
                    <a href="mailto:sebo.sefis@gmail.com">Gmail</a>
                  </div>
                </div>
             </div>
        </div>
    </>
    )


}
export {Bolum}