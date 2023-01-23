import Head from 'next/head'
//import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// import { supabaseClient } from '../utils/supabase'
// import {useAuth, useUser} from '@clerk/nextjs'

export default function Recipe() {
  //const [recipe, setRecipe] = useState({});
  const router = useRouter();
  const { title, category, ingredients, instructions } = router.query;

  // const {getToken} = useAuth()
  // const {user} = useUser()

  // useEffect(() => {
  //   async function fetchData() {

  //     const supabaseToken = await getToken({template: 'supabase'})
  //     const supabase = await supabaseClient(supabaseToken!)
    
  //     const row = await supabase.from('recipes').select().eq('id', id).limit(1);
  //     console.log('row:', row)
  //     console.log('row.data:', row.data)
  //     setRecipe(row.data[0]);
  //   }
  //   fetchData();
  // }, []);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/recipes.svg" />
      </Head>
      <div className='h-auto flex justify-center'>
        <div className='mt-20 w-1/2'>
          <h1 className='mb-3'>{title}</h1>
          <p className='mb-3'>Category: {category}</p>
          <p className='mb-3'>Ingredients: {ingredients}</p>
          <p className='mb-3'>Instructions: {instructions}</p>
        </div>
      </div>
    </div>
  );
}