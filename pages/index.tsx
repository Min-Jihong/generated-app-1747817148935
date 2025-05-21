import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

interface LoginFormData {
  email: string;
  password: string;
}

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
  const router = useRouter();

  const onSubmit = async (data: LoginFormData) => {
    console.log(data);
    // Perform login validation here
    // On success:
    router.push('/product');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <input {...register("email", { required: true })} placeholder="Email" />
      {errors.email && <span>Email is required</span>}
      <input {...register("password", { required: true })} placeholder="Password" type="password" />
      {errors.password && <span>Password is required</span>}
      <button type="submit" className="btn-primary">Login</button>
    </form>
  );
}