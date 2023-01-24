import Head from 'next/head'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { supabaseClient } from '../utils/supabase'
import {useAuth, useUser} from '@clerk/nextjs'

export default function Recipe() {
  const [recipe, setRecipe] = useState<any>({});
  const router = useRouter();
  const { id, title } = router.query;

  const {getToken} = useAuth()
  //const {user} = useUser()

  useEffect(() => {
    async function fetchData() {

      const supabaseToken = await getToken({template: 'supabase'})
      const supabase = await supabaseClient(supabaseToken!)
    
      const row = await supabase.from('recipes').select().eq('id', id).limit(1);
      
      if (row.data !== null) {
        setRecipe(row.data[0]);
      }
      
    }
    fetchData();
  }, []);

  return (
    <div className='flex justify-center items-center bg-gray-900'>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/recipes.svg" />
      </Head>
      <div className='h-auto flex justify-center'>
        <div className='my-14 w-3/4 p-5 bg-slate-50 rounded-lg shadow-md'>
          <div className='mb-10 flex justify-between'>
            <div className='text-xl'>{recipe.title}</div>
            <div>Category: {recipe.category}</div>
          </div>
          <div className='text-lg flex mb-5'>
            <div className='w-[40%]'>Ingredients:</div>
            <div className='w-[60%]'>Instructions:</div>
          </div>
          <div className='flex mb-7'>
            <pre className="w-[40%] pr-5 whitespace-pre-wrap">{recipe.ingredients}</pre>
            <pre className="w-[60%] whitespace-pre-wrap">{recipe.instructions}</pre>
          </div>
        </div>  
      </div>
    </div>
  );
}
