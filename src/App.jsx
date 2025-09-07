import "./App.css";
import  DemoUseState  from "./components/demo_usestate";
import  DemoUseEffect  from "./components/demo_useeffect";
import  DemoUseRef  from "./components/demo_useref";
import  DemoUseMemo  from "./components/demo_usememo";
import  DemoUseCallback  from "./components/demo_usecallback";
import  DemoUseReducer  from "./components/demo_usereducer";
import  {DemoUseContext, ThemeProvider} from "./components/demo_usecontext";
import  DemoUseLayoutEffect  from "./components/demo_uselayouteffect";
import  DemoImperative  from "./components/demo_imperative";
import  DemoUseTransition  from "./components/demo_usetransition";
import  DemoDeferredValue  from "./components/demo_deferredvalue";
import  DemoUseId  from "./components/demo_useid";

const Card = ({ title, desc, children }) => (
  <section
    style={{
      border: "1px solid #2b2f35",
      borderRadius: 12,
      padding: 16,
    }}
  >
    <h2 style={{ margin: 0, fontSize: 18 }}>{title}</h2>
    <p style={{ margin: "4px 0 12px", color: "#e4e8edff" }}>{desc}</p>
    <div>{children}</div>
  </section>
);

const Row = ({ children }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      columnGap: 16, 
      rowGap: 28, 
      marginBlock: 16,
    }}
  >
    {children}
  </div>
);

function App() {
  return (
    <main
      style={{
        maxWidth: 980,
        margin: "0 auto",
        padding: 24,
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto",
      }}
    >
      <h1 style={{ marginTop: 0 }}>React Hooks — Practical Guide</h1>
      <p style={{ color: "#e1e6ecff", marginTop: 4 }}>
        Minimal and commented examples to serve as a quick reference. Copy, play, break, and refactor. 
        Tradition with a future vision — the best of both worlds
      </p>

      <Row>
        <Card title="useState" desc="Local state and controlled inputs.">
          <DemoUseState />
        </Card>
        <Card title="useEffect" desc="Effects after commit + cleanup on unmount.">
          <DemoUseEffect />
        </Card>
        <Card title="useRef" desc="DOM refs and mutable values that don’t trigger re-renders.">
          <DemoUseRef />
        </Card>
      </Row>

      <Row>
        <Card title="useMemo" desc="Memoize expensive calculations.">
          <DemoUseMemo />
        </Card>
        <Card title="useCallback" desc="Stable function references for memoized children.">
          <DemoUseCallback />
        </Card>
        <Card title="useReducer" desc="Complex state managed by actions.">
          <DemoUseReducer />
        </Card>
      </Row>

      <ThemeProvider>
        <Row>
          <Card title="useContext" desc="Simple global state with a Provider.">
            <DemoUseContext />
          </Card>
          <Card title="useLayoutEffect" desc="Measure or touch the layout before painting.">
            <DemoUseLayoutEffect />
          </Card>
          <Card title="forwardRef + useImperativeHandle" desc="Expose a small imperative API.">
            <DemoImperative />
          </Card>
        </Row>
      </ThemeProvider>

      <Row>
        <Card title="useTransition" desc="Transitions to keep the UI responsive.">
          <DemoUseTransition />
        </Card>
        <Card title="useDeferredValue" desc="Decouple typing from heavy renders.">
          <DemoDeferredValue />
        </Card>
        <Card title="useId" desc="Unique and stable IDs for accessibility.">
          <DemoUseId />
        </Card>
      </Row>
    </main>
  );
}

export default App;