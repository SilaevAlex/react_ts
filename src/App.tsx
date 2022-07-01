import { AppRouter } from "./common/components";
import { HeaderFeature, FooterFeature, PageFeature} from "./features"

function App() {
  return <div className="App">
    <HeaderFeature />
      <PageFeature>
        <AppRouter />
      </PageFeature>
      <FooterFeature />
  </div>;
}

export default App;
