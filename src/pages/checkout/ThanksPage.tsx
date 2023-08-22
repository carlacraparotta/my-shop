import { NavLink } from 'react-router-dom';

export function ThanksPage() {
  return (
    <div>
      <div className="text-3xl text-center">Grazie per il tuo ordine!</div>

      <div className="flex justify-center mt-12">
        <NavLink to="/shop" className="btn primary">Torna allo Shop</NavLink>
      </div>
    </div>
  )
}