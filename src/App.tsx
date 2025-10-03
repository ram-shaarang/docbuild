import CodeBox from './components/CodeBox';
import CodeSnippet from './components/CodeSnippet';
import Content from './components/Content';
import Explanation from './components/Explanation';
import CriticalNote from './components/CriticalNote';

function App() {
  const sampleCode = `def quantize_(model, config):
    # Your quantization code here
    return model`;

  return (
    <div className="app" style={{ padding: '20px' }}>
      <h1>TorchAO Documentation Builder</h1>

      <CodeBox
        code={sampleCode}
        file="torchao/quantization/quant_api.py"
        startLine={488}
      />

      <Content>
        <p>filter_fn = _is_linear if filter_fn is None else filter_fn</p>
      </Content>

      <Explanation>
        <p><strong>_is_linear function</strong> determines if a module should be quantized...</p>
      </Explanation>

      <Content>
        <p>Use <CodeSnippet code="quantize_(model, config)" /> to quantize your model.</p>
      </Content>

      <CriticalNote>
        <p>Critical: This prevents double quantization!</p>
      </CriticalNote>
    </div>
  );
}

export default App;
