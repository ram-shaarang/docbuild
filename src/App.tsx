import CodeBox from './components/CodeBox';

function App() {
  const sampleCode = `def quantize_(model, config):
    # Your quantization code here
    return model`;

  return (
    <div className="app">
      <h1>DocBuild</h1>
      <CodeBox 
        code={sampleCode}
        file="torchao/quantization/quant_api.py"
        startLine={488}
      />
    </div>
  );
}

export default App;
