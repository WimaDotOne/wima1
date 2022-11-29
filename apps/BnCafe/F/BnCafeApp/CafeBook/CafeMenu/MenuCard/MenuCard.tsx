import { ClassNames } from "../../../../../../../libs/Core/Core1/fCore1"
import { IDrink } from "../../../../Model/Drink"
import { Size } from "../../../../Model/Size"
import { Cent2Dollar } from "../../../H/PriceUtil"
import cl from "./MenuCard.module.scss"

interface IMenuCardProp {
  categoryName: string
  drinks: Array<IDrink>
  hasTrenta?: boolean
  onClickDrinkName: (drink: IDrink)=>void
  onClickPrice: (drink: IDrink, size: string)=>void
  backgroundColor?: string
  darkText?: boolean
}

export function MenuCard({
  categoryName,
  drinks,
  hasTrenta,
  onClickDrinkName,
  onClickPrice,
  backgroundColor,
  darkText
}: IMenuCardProp) {

  drinks = drinks || []
  backgroundColor = backgroundColor || "#333"
  const clDarkText = darkText ? cl.darkText : ""
  return(<>
    <table className={cl.table} style={{backgroundColor}}>
      <thead>
      <tr className={clDarkText}>
        <th className={cl.categoryName}>{categoryName}</th>
        <th className={cl.size}>Tall</th>
        <th className={cl.size}>Grande</th>
        <th className={cl.size}>Venti</th>
        {
          hasTrenta ? <th className={cl.size}>Tenta</th> : null
        }
        </tr>
      </thead>
      <tbody>
      {
        drinks.map((drink, i)=>
        <tr key={drink.code+i} className={clDarkText}>
          <td>
            <div className={cl.drinkName}
              onClick={()=> onClickDrinkName(drink)}>
              <div className={ClassNames([cl.drinkNameInner, clDarkText])}>
                {drink.name}
              </div>
            </div></td>
          <td>
            <div className={ClassNames([cl.price, clDarkText])} 
                onClick={()=>onClickPrice(drink, Size.Tall)}>
                {Cent2Dollar(drink.price1)}
            </div>
          </td>
          <td>
            <div className={ClassNames([cl.price, clDarkText])} 
              onClick={()=>onClickPrice(drink, Size.Grande)}>
              {Cent2Dollar(drink.price2)}
            </div>
          </td>
          <td>
            <div className={ClassNames([cl.price, clDarkText])} 
              onClick={()=>onClickPrice(drink, Size.Venti)}>
              {Cent2Dollar(drink.price3)}
            </div>
          </td>
          {
            hasTrenta ? 
            <td>
            <div className={ClassNames([cl.price, clDarkText])} 
              onClick={()=>onClickPrice(drink, Size.Trenta)}>
              {Cent2Dollar(drink.price4)}
            </div>
          </td> : null
          }
        </tr>
        )
      }
      </tbody>
    </table>
  </>)
}