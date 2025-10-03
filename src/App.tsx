import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes';
import { Content, Explanation, CriticalNote, SectionTitle } from './styles/StyledComponents';
import CodeBox from './components/CodeBox';
import CodeSnippet from './components/CodeSnippet';

function App() {
  const quantizeCode = `def quantize_(model, config):
    # Your quantization code here
    return model`;

  const isLinearCode = `def _is_linear(mod, *args):
    return isinstance(mod, torch.nn.Linear) and hasattr(mod, "weight")`;

  return (
    <ThemeProvider theme={lightTheme}>
      <div style={{
        padding: '6px',
        backgroundColor: lightTheme.colors.background,
        color: lightTheme.colors.text,
      }}>
        <h1>DocBuild</h1>

        {/* Section 1 */}
        <div style={{ marginBottom: '40px' }}>
          <SectionTitle>quantize_ Function</SectionTitle>
          <CodeBox
            code={quantizeCode}
            githubUrl="https://github.com/pytorch/ao/blob/main/torchao/quantization/quant_api.py#L489"
          />
          <Content>
            <p>filter_fn = _is_linear if filter_fn is None else filter_fn</p>
          </Content>
        </div>

        {/* Section 2 */}
        <div style={{ marginBottom: '40px' }}>
          <SectionTitle>_is_linear Function</SectionTitle>
          <CodeBox
            code={isLinearCode}
            githubUrl="https://github.com/pytorch/ao/blob/main/torchao/quantization/quant_api.py#L278"
          />
          <Explanation>
            <p><strong><CodeSnippet code="_is_linear function" /></strong> determines if a module should be quantized. It returns <code>True</code> only if:</p>
            <ul>
              <li>Module is <code>torch.nn.Linear</code></li>
              <li>Has a <code>weight</code> parameter</li>
              <li>Weight is not already quantized</li>
            </ul>
            <p><strong>Prevents double quantization!</strong></p>
          </Explanation>
        </div>

        {/* Section 3 */}
        <div style={{ marginBottom: '40px' }}>
          <SectionTitle>ModuleFqnToConfig Class</SectionTitle>
          <CodeBox
            code={`@dataclass\nclass ModuleFqnToConfig(AOBaseConfig):\n    module_fqn_to_config: Dict[str, Optional[AOBaseConfig]] = field(default_factory=dict)`}
            githubUrl="https://github.com/pytorch/ao/blob/main/torchao/quantization/quant_api.py#L2385"
          />
          <Explanation>
            <p>This class allows granular control over quantization settings per module.</p>
          </Explanation>
          <CriticalNote>
            <p>Critical: Mutable default arguments in Python can cause subtle bugs!</p>
          </CriticalNote>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;