# Types Stepper

Para usar o Stepper utilize o seguinte objeto:

```js
{
  type: 'stepper',
  templateOptions: { /* Options do stepper */ },
  fieldGroup: [
    {
      /* Step 1 */
      templateOptions: { /* Options do step */ },
      fieldGroup: [
        /* Fields (input, select, textarea...) */
      ],
    },
    {
      /* Step 2 */
      templateOptions: { /* Options do step */ },
      fieldGroup: [
        /* Fields (input, select, textarea...) */
      ],
    },
    /* ... */
  ],
}
```

### Options stepper

O stepper tem várias opções que podem ser configuradas, são elas:

- `linear: Boolean` (**Default:** `true`): Se a validade das etapas anteriores deve ser verificada ou não.
- `orientation: 'horizontal' | 'vertical'` (**Default:** 'vertical'): Orientação do stepper.

### Options Step

Cada objeto dentro do `fieldGroup` é um step. O Step tem suas próprias configurações, são elas:

- `label: String`: Rótulo de texto simples da etapa.
