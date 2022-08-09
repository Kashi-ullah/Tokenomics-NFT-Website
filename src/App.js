import './App.css';
import Header from './Components/Header';
import LedderCards from './Components/LedderCards';

function App() {
  return (
    <div className="App">
      <Header className="positioning"></Header>
      {/* first Section */}
      <div id="firstSection" className="firstSection">
        <h3>SOME IMPORTANT HEADING</h3>
        <p>lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
          ipsumlorem ipsumlorem ipsumlorem ipsum</p>
        <div id="sections" className='firstSecBtn'>
          <button>Market Place</button>
          <button>Connect Wallet</button>
        </div>
      </div>
      {/* !first Section */}

      {/* second Section */}
      <div id="sections" className="secondSection">
        <div>
          <h3 id='secondsection'>HEADING</h3>
          <p>lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
            ipsumlorem ipsumlorem ipsumlorem ipsum
            lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
            ipsumlorem ipsumlorem ipsumlorem ipsum
          </p>
        </div>
        <img src='SecSectionPic.jpg'></img>
      </div>
      {/* !second Section */}

      {/* third Section */}
      <div id="sections" className="thirdSection">
        <img src='ThirdSecPic.jpg'></img>
        <div>
          <h3 id='thirdsection'>HEADING</h3>
          <p>lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
            ipsumlorem ipsumlorem ipsumlorem ipsum
            lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
            ipsumlorem ipsumlorem ipsumlorem ipsum
          </p>
        </div>
      </div>
      {/* !third Section */}

      {/* 4rth Section */}
      <div className='fourthSection'>
        <h3>HEADING</h3>
        <div className='fourthSectionCards'>
          <div className='card'>
            <img src='cardpic.png'></img>
            <h5>Some Text</h5>
          </div>
          <div className='card'>
            <img src='cardpic.png'></img>
            <h5>Some Text</h5>
          </div>
          <div className='card'>
            <img src='cardpic.png'></img>
            <h5>Some Text</h5>
          </div>

        </div>
      </div>

      {/* !4rth Section */}

      {/* 5th Section */}
      <div className='fifthSection'>
        <div className='para'>
          <h1>Heading Here</h1>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam
          </p>
        </div>
        <div className='whiteSec'>{/* some contents */}</div>
        <div className='purpleSec'>{/* some contents */}</div>

      </div>
      {/* !5th Section */}

      {/* 6th Section */}
      <LedderCards></LedderCards>
      {/* !6th Section */}

      {/* 7th Section TOKENOMICS */}
      <div className='seventhSection'>
        <h1>tokenomics</h1>
        <p>dignissim per, habeo iusto primis ea eam.</p>
        <div className='post'>
          <img src='circlePie.png'></img>
          <div>
          <h3>Some Text Here</h3>
          <h3>Some Text Here</h3>
          <h3>Some Text Here</h3>
          </div>
        </div>
      </div>
      {/* !7th Section */}

      {/* 8th Section ALLOCATION LEVEL */}
      <div className='eitSection'>
      
        <h1>Allocation Level</h1>
      <div className='poster'>
          <div className='card'>
            <img src='cardpic.png'></img>
            <h1>Heading</h1>
            <p>Some important Text Here</p>
            <p>Some important Text Here</p>
            <p>Some important Text Here</p>
            <p>Some important Text Here</p>
            <p>Some important Text Here</p>
          </div>
          <div className='card'>
          <img src='cardpic.png'></img>
          <h1>Heading</h1>
            <p>Some important Text Here</p>
            <p>Some important Text Here</p>
            <p>Some important Text Here</p>
            <p>Some important Text Here</p>
            <p>Some important Text Here</p>
          </div>
          <div className='card'>
          <img src='cardpic.png'></img>
          <h1>Heading</h1>
            <p>Some important Text Here</p>
            <p>Some important Text Here</p>
            <p>Some important Text Here</p>
            <p>Some important Text Here</p>
            <p>Some important Text Here</p>
          </div>
      </div>
      </div>
      {/* !8th Section */}

      {/* 9th Section */}
      <div className='ninthSection'>
      <div className='card'>
        <img src='profile.png'></img>
        <h1>Name</h1>
        <h3>Designation</h3>
      </div>
      <div className='card'>
      <img src='profile.png'></img>
        <h1>Name</h1>
        <h3>Designation</h3>
      </div>
      <div className='card'>
      <img src='profile.png'></img>
        <h1>Name</h1>
        <h3>Designation</h3>
      </div>
      </div>
      {/* !9th Section */}

      {/* 10th Section */}
      <div className='tenthSection'>
            <div>
              <h1>Terms and Condition</h1>
              <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
              <button>Click For Details </button>
              <button>Click For Details </button>
              <div className='menu'>
                <div className='card'>
                  <h4>Our Company</h4>
                  <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </div>
                <div className='card'>
                <h4>Useful Links</h4>
                <ul>
                  <ol>Pricing</ol>
                  <ol>Setting</ol>
                  <ol>Order</ol>
                  <ol>Help</ol>
                </ul>
                </div>
                <div className='card'>
                  <h4>Contacts</h4>
                </div>
                <div className='card'>socialIconsMenu</div>
              </div>
            </div>
      </div>
      {/* !10th Section */}

    </div>// parent div
    
  );
}

export default App;
