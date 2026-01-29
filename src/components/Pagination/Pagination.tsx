import React from 'react'
import Faleft from "../../assets/images/back2User.svg"
import Potrait from "../../assets/images/singleUser.svg"
import f_star from "../../assets/images/fullStar.svg"
import e_star from "../../assets/images/Emptystar.svg"
import { useLocation, useNavigate} from 'react-router'
import "./css/pagination.css"

const Pagination = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state;
  

    if (!user) return <p>No user data found!</p>;
  return (
    <div className='pagin'>
      <div className='top'>
        <div className='lead'>
          <img src={Faleft} onClick={()=>navigate("/home")}/>
          <p>Back to Users</p>
        </div>
        <div className='info'>
          <div className='head'>
            <h2>User Details</h2>
            <div className='button_wrapper'>
              <button>Blacklist User</button>
              <button>Activate User</button>
            </div>
          </div>
          <div className='user_card'>
    <div className='card_info'>
      <div className='tier_info'>
        <figure className='potrait'>
          <img src={Potrait}/>
        </figure>
        <div className='potrait_info'>
          <h2>{user.personalInformation.FullName}</h2>
          <p>{user.id}</p>
        </div>
        <br/>
        <div className='user_tier del'>
          <p>User's tier</p>
          <div>
      <figure> <img src={f_star}/></figure>
      <figure> <img src={e_star}/></figure>
      <figure> <img src={e_star}/></figure>
          </div>
        </div>
        <div className='user_salary del'>
          <h2>
            ₦200,000
          </h2>
          <p>{user.personalInformation.AccountNumber}/ {user.personalInformation.BankName}</p>
        </div>
      </div>
        
    </div>
    <div className='card_nav'>
      <ul>
        <li className='active'>General details</li>
        <li >Documents</li>
        <li className='del'>Bank details</li>
        <li>Loans</li>
        <li className='del'>Savings</li>
        <li className='del'>Apps and Systems</li>
      </ul>
    </div>
          </div>
        </div>

      </div>
      <div className='bottom'>
          <div className='data'>
            <h2>Personal Information</h2>
            <div className='data_'>
              <div className='data__'>
                <h2> FULL NAME</h2>
                <p>{user.personalInformation.FullName}</p>
              </div>
               <div className='data__'>
                <h2> PHONE NUMBER</h2>
                <p>{user.personalInformation.PhoneNumber}</p>
              </div>
               <div className='data__'>
                <h2> EMAIL ADDRESS</h2>
                <p>{user.personalInformation.EmailAddress}</p>
              </div>
               <div className='data__'>
                <h2> BVN</h2>
                <p>{user.personalInformation.Bvn}</p>
              </div>
               <div className='data__'>
                <h2> GENDER</h2>
                <p>{user.personalInformation.Gender}</p>
              </div>
               <div className='data__'>
                <h2> MARITAL STATUS</h2>
                <p>{user.personalInformation.MaritalStatus}</p>
              </div>
               <div className='data__'>
                <h2> CHILDREN</h2>
                {!user.personalInformation.Children && <p>None</p>}
                {user.personalInformation.Children && <p>Yes</p>}
              </div>
               <div className='data__'>
                <h2> TYPE OF RESIDENCE</h2>
                <p>{user.personalInformation.TypeOfResidence}</p>
              </div>
            </div>
          </div>
          <div className='data'>
      <h2>EDUCATION AND EMPLOYMENT</h2>
      <div className='data_'>
       <div className='data__'>
                <h2> LEVEL OF EDUCATION</h2>
                <p>{user.EnE.LOE}</p>
              </div>
               <div className='data__'>
                <h2> EMPLOYMENT STATUS</h2>
                <p>{user.EnE.ES}</p>
              </div>
               <div className='data__'>
                <h2> SECTOR OF EMPLOYMENT</h2>
                <p>{user.EnE.SE}</p>
              </div>
               <div className='data__'>
                <h2> DURATION OF EMPLOYMENT</h2>
                <p>{user.EnE.DE}</p>
              </div>
               <div className='data__'>
                <h2> OFFICE EMAIL</h2>
                <p>{user.EnE.OE}</p>
              </div>
               <div className='data__'>
                <h2> MONTHLY INCOME</h2>
                <p>{user.EnE.MI}</p>
              </div>
               <div className='data__'>
                <h2> LOAN REPAYMENT</h2>
                <p>{user.EnE.LR}</p>
              </div>
      </div>
          </div>
          <div className='data'>
            <h2>SOCIALS</h2>
            <div className='data_'>
             <div className='data__'>
                <h2> TWITTER</h2>
                <p>{user.socials.twitter}</p>
              </div>
               <div className='data__'>
                <h2> FACEBOOK</h2>
                <p>{user.socials.facebook}</p>
              </div>
               <div className='data__'>
                <h2> INSTAGRAM</h2>
                <p>{user.socials.instagram}</p>
              </div>
            </div>

          </div>
          <div className='data'>
            <h2>GUARANTOR</h2>
            <div className='data_'>
         <div className='data__'>
                <h2> FULL NAME</h2>
                <p>{user.guarantor.FullName}</p>
              </div>
              <div className='data__'>
                <h2> PHONE NUMBER</h2>
                <p>{user.guarantor.PhoneNumber}</p>
              </div>
              <div className='data__'>
                <h2> EMAIL ADDRESS</h2>
                <p>{user.guarantor.EmailAddress}</p>
              </div>
              <div className='data__'>
                <h2> RELATIONSHIP</h2>
                <p>{user.guarantor.Relationship}</p>
              </div>
            </div>

          </div>
          <div className='data '>
            <h2>GUARANTOR</h2>
            <div className='data_ '>
         <div className='data__'>
                <h2> FULL NAME</h2>
                <p>{user.guarantor.FullName}</p>
              </div>
              <div className='data__'>
                <h2> PHONE NUMBER</h2>
                <p>{user.guarantor.PhoneNumber}</p>
              </div>
              <div className='data__'>
                <h2> EMAIL ADDRESS</h2>
                <p>{user.guarantor.EmailAddress}</p>
              </div>
              <div className='data__'>
                <h2> RELATIONSHIP</h2>
                <p>{user.guarantor.Relationship}</p>
              </div>
            </div>

          </div>
         
      </div>
      
    </div>
  )
}

export default Pagination