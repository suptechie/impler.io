import Link from 'next/link';
import Image from 'next/image';
import { Title, Text, Stack, Flex, TextInput as Input } from '@mantine/core';

import { Button } from '@ui/button';
import { PasswordInput } from '@ui/password-input';

import { useSignup } from '@hooks/auth/useSignup';
import DarkLogo from '@assets/images/logo-dark.png';
import { OnboardLayout } from '@layouts/OnboardLayout';
import { ROUTES } from '@config';

export default function SignupPage({}) {
  const { register, isSignupLoading, signup, errors } = useSignup();

  return (
    <>
      <Flex
        gap="sm"
        direction="column"
        mb="md"
        align={{
          base: 'center',
          md: 'flex-start',
        }}
      >
        <Image src={DarkLogo} width={80} alt="Impler Logo" />
        <Title order={1} color="white">
          Signup yourself
        </Title>
      </Flex>
      <form onSubmit={signup} style={{ width: '100%' }}>
        <Stack>
          <Input
            required
            size="md"
            placeholder="Full Name"
            error={errors.fullName?.message}
            {...register('fullName', {
              pattern: {
                value: /\s/gm,
                message: 'Please enter your full name',
              },
            })}
          />
          <Input {...register('email')} size="md" placeholder="Email" required error={errors.email?.message} />
          <PasswordInput register={register('password')} size="md" placeholder="Password" required />
          <Button id="signup" loading={isSignupLoading} fullWidth type="submit" size="md">
            Create an account
          </Button>
          <Text size="md" align="center">
            Already have an account? <Link href={ROUTES.SIGNIN}>Sign In</Link>
          </Text>
        </Stack>
      </form>
    </>
  );
}

SignupPage.Layout = OnboardLayout;
