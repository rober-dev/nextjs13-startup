'use client';

import { useRef, useState } from 'react';
import { useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';

import { Label } from '@/components/ui/label';

import { useI18n, useCurrentLocale } from '@/locales/client';
import { sendContactFormEmail } from '@/actions/email-actions';
import { ActionResponse } from '@/types/form-types';
import { ContactSchema } from './ContactSchema';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Alert from '@/components/shared/Alert';
import { ContactFormEmailProps } from '@/emails/contact-form';
import { ProgressBar } from '@/components/shared/progress-bar/ProgressBar';

export default function ContactForm() {
  const t = useI18n();
  const locale = useCurrentLocale();
  const contactSchemaLng = ContactSchema(locale);

  const formRef = useRef<HTMLFormElement>(null);
  const [actionResponse, setActionResponse] = useState<ActionResponse | null>(
    null
  );

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<ContactFormEmailProps>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
    resolver: yupResolver(contactSchemaLng),
  });
  const { isSubmitting } = useFormState({ control });

  async function onSubmit(formData: ContactFormEmailProps) {
    try {
      setActionResponse(null);
      const result = await sendContactFormEmail(formData);
      setActionResponse(result);
      if (result.success) {
        reset();
      }
    } catch (err: Error | any) {
      setActionResponse({
        success: false,
        message: err.message || t('error_processing_request'),
      });
    }
  }

  return (
    <form
      ref={formRef}
      className='flex flex-col gap-1'
      onSubmit={handleSubmit(async (data) => {
        await onSubmit(data);
      })}
    >
      {/* Email */}
      <div className='grid w-full items-center gap-1.5'>
        <Label htmlFor='email' className='capitalize font-bold'>
          *{t('email')}
        </Label>
        <Input
          {...register('email')}
          type='email'
          id='email'
          name='email'
          placeholder={t('email_placeholder')}
        />
        <p className='text-red-600 text-sm mb-4'>{errors.email?.message}</p>
      </div>

      {/* Name */}
      <div className='grid w-full items-center gap-1.5'>
        <Label htmlFor='name' className='capitalize font-bold'>
          *{t('name')}
        </Label>
        <Input {...register('name')} name='name' id='name' placeholder='' />
        <p className='text-red-600 text-sm mb-4'>{errors.name?.message}</p>
      </div>

      {/* Phone */}
      <div className='grid w-full items-center gap-1.5'>
        <Label htmlFor='phone' className='capitalize'>
          {t('phone')}
        </Label>
        <Input
          {...register('phone')}
          id='phone'
          name='phone'
          placeholder=''
          className={clsx(
            errors.phone?.message && 'bg-red-100 dark:bg-red-950'
          )}
        />
        <p className='text-red-600 text-sm mb-4'>{errors.phone?.message}</p>
      </div>

      {/* Subject */}
      <div className='grid w-full items-center gap-1.5'>
        <Label htmlFor='subject' className='capitalize'>
          {t('subject')}
        </Label>
        <Input
          {...register('subject')}
          id='subject'
          name='subject'
          placeholder=''
        />
        <p className='text-red-600 text-sm mb-4'>{errors.subject?.message}</p>
      </div>

      {/* Message */}
      <div className='grid w-full items-center gap-1.5'>
        <Label htmlFor='message' className='capitalize font-bold'>
          *{t('message')}
        </Label>
        <Textarea
          {...register('message')}
          id='message'
          name='message'
          placeholder=''
        />
        <p className='text-red-600 text-sm mb-4'>{errors.message?.message}</p>
      </div>

      <div className='flex flex-col gap-4'>
        {isSubmitting && <ProgressBar />}

        {actionResponse && (
          <Alert
            success={actionResponse.success}
            message={actionResponse.message}
          />
        )}

        <Button
          type='submit'
          name='submit'
          id='submit'
          disabled={isSubmitting}
          className='uppercase disabled:bg-slate-600 disabled:dark:bg-slate-400'
        >
          {t('send_message')}
        </Button>
      </div>

      {/* <pre>{JSON.stringify({ isDirty, isValid }, null, 2)}</pre> */}
    </form>
  );
}
