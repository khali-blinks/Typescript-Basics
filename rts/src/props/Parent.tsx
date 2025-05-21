import { Child } from './Child';

export const Parent = () => {
  return (
    <div>
      <Child color='red' onClick={()=> console.log('clicked')}>
        ghjggjhj
        </Child>
    </div>
  );
}