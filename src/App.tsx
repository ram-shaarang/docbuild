import CodeBox from './components/CodeBox';
import CodeSnippet from './components/CodeSnippet';
import Content from './components/Content';
import Explanation from './components/Explanation';
import CriticalNote from './components/CriticalNote';
import DocumentationSection from './components/DocumentationSection';

function App() {
  const quantizeCode = `def quantize_(model, config):
    # Your quantization code here
    return model`;

  const isLinearCode = `def _is_linear(mod, *args):
    return isinstance(mod, torch.nn.Linear) and hasattr(mod, "weight")`;

  return (

    <div className="app" style={{
      padding: '20px',
      backgroundColor: 'white',
      color: 'black',
      minHeight: '100vh'
    }}>
      <h1>DocBuild</h1>

      <DocumentationSection title="quantize_ Function">
        <CodeBox
          code={quantizeCode}
          githubUrl="https://github.com/pytorch/ao/blob/main/torchao/quantization/quant_api.py#L489"
        />
        <Content>
          <p>filter_fn = _is_linear if filter_fn is None else filter_fn</p>
        </Content>
      </DocumentationSection>

      <DocumentationSection title="_is_linear Function">
        <CodeBox
          code={isLinearCode}
          githubUrl="https://github.com/pytorch/ao/blob/main/torchao/quantization/quant_api.py#L278"
        />
        <Explanation>
          <p><strong>_is_linear function</strong> determines if a module should be quantized. It returns <code>True</code> only if:</p>
          <ul>
            <li>Module is <code>torch.nn.Linear</code></li>
            <li>Has a <code>weight</code> parameter</li>
            <li>Weight is not already quantized</li>
          </ul>
          <p><strong>Prevents double quantization!</strong></p>
        </Explanation>
      </DocumentationSection>

      <DocumentationSection title="ModuleFqnToConfig Class">
        <CodeBox
          code={`@dataclass\nclass ModuleFqnToConfig(AOBaseConfig):\n    module_fqn_to_config: Dict[str, Optional[AOBaseConfig]] = field(default_factory=dict)`}
          githubUrl="https://github.com/pytorch/ao/blob/main/torchao/quantization/quant_api.py#L2385"
        />
        <Explanation>
          <p>This class allows granular control over quantization settings per module.</p>
        </Explanation>
        <Content>
          <p>Use <CodeSnippet code="quantize_(model, config)" /> to quantize your model.</p>
        </Content>
        <CriticalNote>
          <p>Critical: Mutable default arguments in Python can cause subtle bugs!</p>
        </CriticalNote>
      </DocumentationSection>
    </div>
  );
}

export default App;