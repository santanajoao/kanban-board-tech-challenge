import { z } from 'zod';

const priorities = ['LOW', 'MEDIUM', 'HIGH'] as const;

function validateDateString(dateString: string): string | null {
  try {
    const date = new Date(dateString);
    const today = new Date();
    if (date <= today) return 'Date must be equal to or later than now';
  
    return null; 
  } catch {
    return 'Invalid date';
  }
}

export const createTaskSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  endDate: z.string()
    .min(1, 'Date is required')
    .superRefine((endDate, context) => {
      const errorMessage = validateDateString(endDate);
      if (!errorMessage) return true;
      
      context.addIssue({ message: errorMessage, code: z.ZodIssueCode.custom });
    }),
  priority: z.enum(priorities),
});
