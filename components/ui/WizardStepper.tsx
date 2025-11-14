interface Step {
  number: number;
  title: string;
  description: string;
}

interface WizardStepperProps {
  currentStep: number;
  steps: Step[];
}

export default function WizardStepper({ currentStep, steps }: WizardStepperProps) {
  return (
    <>
      {/* Desktop: Horizontal Stepper */}
      <div className="hidden md:flex items-center justify-between max-w-4xl pt-4">
        {steps.map((step, index) => {
          const isActive = step.number === currentStep;
          const isCompleted = step.number < currentStep;
          const isPending = step.number > currentStep;
          const isLast = index === steps.length - 1;

          return (
            <div key={step.number} className={`${isLast ? 'flex items-center' : 'flex-1 flex items-center'}`}>
              {/* Circle */}
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full font-display font-bold text-sm flex-shrink-0 transition-all ${
                  isActive
                    ? 'bg-pmc-red text-white'
                    : isCompleted
                    ? 'bg-pmc-red text-white'
                    : 'bg-stone-100 text-stone-400'
                }`}
              >
                {step.number}
              </div>

              {/* Labels */}
              <div className="ml-4 flex-shrink-0">
                <div
                  className={`text-sm font-semibold ${
                    isActive ? 'text-stone-900' : isPending ? 'text-stone-400' : 'text-stone-900'
                  }`}
                >
                  {step.title}
                </div>
                <div
                  className={`text-xs ${
                    isActive ? 'text-stone-500' : isPending ? 'text-stone-400' : 'text-stone-500'
                  }`}
                >
                  {step.description}
                </div>
              </div>

              {/* Connecting Line */}
              {!isLast && (
                <div
                  className={`flex-1 h-px ml-8 transition-all ${
                    isCompleted ? 'bg-pmc-red' : 'bg-stone-200'
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile: Compact Progress Dots */}
      <div className="md:hidden flex items-center gap-2 py-3">
        {steps.map((step) => {
          const isActive = step.number === currentStep;
          const isCompleted = step.number < currentStep;

          return (
            <div
              key={step.number}
              className={`flex-1 h-1.5 rounded-full transition-all ${
                isCompleted
                  ? 'bg-pmc-red'
                  : isActive
                  ? 'bg-pmc-red'
                  : 'bg-stone-200'
              }`}
            />
          );
        })}
      </div>
    </>
  );
}
