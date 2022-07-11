import { RequiredStringValidator, Validator } from '@/application/validation'

type ValidationBuilderParams = {
  value: string
  fieldName: string
}

export class ValidationBuilder {
  private constructor(
    private readonly value: string,
    private readonly fieldName: string,
    private readonly validators: Validator[] = []
  ) {}

  // eslint-disable-next-line @typescript-eslint/member-delimiter-style
  static of(params: ValidationBuilderParams): ValidationBuilder {
    return new ValidationBuilder(params.value, params.fieldName)
  }

  required(): ValidationBuilder {
    this.validators.push(
      new RequiredStringValidator(this.value, this.fieldName)
    )
    return this
  }

  build(): Validator[] {
    return this.validators
  }
}
