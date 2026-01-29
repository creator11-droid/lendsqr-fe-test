import { useState } from 'react'
import users from "../../assets/images/users2.svg"
import activeUsers from "../../assets/images/active-users.svg"
import loanUsers from "../../assets/images/loanUsers.svg"
import savingsUser from "../../assets/images/usersSavings.svg"
import filter from "../../assets/images/filter.svg"
import info from "../../assets/images/Info.svg"
import Faleft from "../../assets/images/faleft.svg"
import Faright from "../../assets/images/faright.svg"
import "./css/index.css"
import repeatedUsers from '../../data/userData'
import getPagination from '../../helper/pagination'
import Dropdown from '../Dropdown/Dropdown'
import activUser from "../../assets/images/whitelist.svg"
import Anubis from "../../assets/images/Anubis.svg"
import karma from "../../assets/images/user3.svg"
import { useNavigate } from 'react-router'


const User = () => {
const [openfilter, setOpenFilter] = useState(false)
const [openfilter1, setOpenFilter1] = useState(false)
const [openActions, setOpenActions] = useState<string| null>(null)
  const ITEMS_PER_PAGE = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

    const lastIndex = currentPage * ITEMS_PER_PAGE;
  const firstIndex = lastIndex - ITEMS_PER_PAGE;

   const currentItems = repeatedUsers.slice(firstIndex, lastIndex);

    const totalPages = Math.ceil(repeatedUsers.length / ITEMS_PER_PAGE);
    
    const pagesPrint=()=>{
      if (currentPage * ITEMS_PER_PAGE >= repeatedUsers.length ){
        return repeatedUsers.length;
      }else
        return currentPage*ITEMS_PER_PAGE;
    }

  return (
    <div className='users'>
      <h3 className='users_head'>Users</h3>
      <div className='users_box'>
        <div className='box'> 
          <figure>
          <img src={users} alt="" />
          </figure>
          <p>USERS</p>
          <h3>2,453</h3>
        </div>
        <div className='box'>
          <figure>
          <img src={activeUsers} alt="" />
          </figure>
          <p>ACTIVE USERS</p>
          <h3>2,453</h3>
        </div>
        <div className='box'>
          <figure>
          <img src={loanUsers} alt="" />
          </figure>
          <p>USERS WITH LOANS</p>
          <h3>12,453</h3>
        </div>
        <div className='box'>
          <figure>
          <img src={savingsUser} alt="" />
          </figure>
          <p>USERS WITH SAVINGS</p>
          <h3>102,453</h3>
        </div>
        
      </div>
      <div className='pagination'>
       
          <table>
            <tr>
 <th className='del'>
              <div className='wrapper'>
                 <p>Organization</p>
                 <Dropdown open={openfilter} onClose={()=>setOpenFilter(false) }
                  trigger={
                     <button onClick={(e)=>{e.preventDefault(); setOpenFilter((prev)=>!prev)}}>
                <img src={filter}
              />
              </button>
                  }
                  >
                    <div className='line_wrapper'>
                      <label className='line'>
                       <p>Organization</p> 
                       <select>
                        <option value="" selected disabled hidden>Select</option>
                       </select>
                      </label>
                       <label className='line'>
                        <p> UserName</p>
                        <input type='text' placeholder='User Name'/>
                      </label>
                       <label className='line'>
                        <p>Email</p>
                        <input type='text' placeholder='Email'/>
                      </label>
                       <label className='line'>
                      <p>  Date</p>
                        <input type='date'/>
                      </label>
                       <label className='line'>
                        <p>Phone Number</p>
                        <input type='text' placeholder='Phone Number'/>
                      </label>
                       <label className='line'>
                       <p> Status</p>
                       <select>
                        <option value="" selected disabled hidden>Select</option>
                       </select>
                      </label>
                      
                    </div>
                    <div className='btn_wrapper'>
                      <button>Reset</button>
                      <button> Filter</button>
                    </div>
                 </Dropdown>
             
              </div>
             
            </th>
            <th> 
              <div className='wrapper'>
                 <p>UserName</p>
              <Dropdown open={openfilter1} onClose={()=>setOpenFilter1(false) }
                  trigger={
                     <button onClick={(e)=>{e.preventDefault(); setOpenFilter1((prev)=>!prev)}}>
                <img src={filter}
              />
              </button>
                  }
                  >
                    <div className='line_wrapper'>
                      <label className='line'>
                       <p>Organization</p> 
                       <select>
                        <option value="" selected disabled hidden>Select</option>
                       </select>
                      </label>
                       <label className='line'>
                        <p> UserName</p>
                        <input type='text' placeholder='User Name'/>
                      </label>
                       <label className='line'>
                        <p>Email</p>
                        <input type='text' placeholder='Email'/>
                      </label>
                       <label className='line'>
                      <p>  Date</p>
                        <input type='date'/>
                      </label>
                       <label className='line'>
                        <p>Phone Number</p>
                        <input type='text' placeholder='Phone Number'/>
                      </label>
                       <label className='line'>
                       <p> Status</p>
                       <select>
                        <option value="" selected disabled hidden>Select</option>
                       </select>
                      </label>
                      
                    </div>
                    <div className='btn_wrapper'>
                      <button>Reset</button>
                      <button> Filter</button>
                    </div>
                 </Dropdown>
              </div>
             </th>
            <th  className='del'>
              <div className='wrapper '>
                <p>Email</p>
              <button>
                 <img src={filter}/></button>
              </div>
              </th>
                 <th className='del'>
                  <div className='wrapper'>
                    <p> Phone Number</p>
              <button>
                 <img src={filter}/></button>
                  </div>
              </th>
            <th className='del'> 
              <div className='wrapper '>
                <p>
                Date Joined
              </p>
              <button>
                 <img src={filter}/></button>
              </div>
              </th>
            <th >
              <div className='wrapper'>
                 <p> Status</p>
              <button>
                 <img src={filter}/></button>
              </div>
             </th>
            
            <th>
           
            </th>
            </tr>
           
            {
  currentItems.map((user)=>(
 
       <tr key={user.uid}> 
    <td className='del'>{user.profile} </td>
    <td> {user.personalInformation.FullName} </td>
    <td className='del'> {user.personalInformation.EmailAddress}</td>
    <td className='del'>{user.personalInformation.PhoneNumber} </td>
    <td className='del'>{user.dateJoined} </td>
    <td className='ld'> {user.status === "Active" && <p className='success'>Active</p>}
    {user.status === "Inactive" && <p className='neutral'>InActive</p>}
    {user.status === "Pending" && <p className='pending'>Pending</p>}
    {user.status === "Blacklisted" && <p className='failure'>Blacklisted</p>}</td>
    <td className='actions'><Dropdown open={openActions === user.uid} onClose={()=>setOpenActions(null)}
      trigger={
        <img src={info} onClick={()=>setOpenActions( openActions === user.uid ? null : user.uid)}/> 
      }>
      <ul className='actions_wrapper'>
        <li className='hold' 
          onClick={() => {
    navigate("/user", { state: user });
    setOpenActions(null); 
  }}>
     
            <img src={Anubis}/>
            <p> View user</p>
     
        </li>
       <li className='hold'>
     
            <img src={karma}/>
            <p>Blacklist user</p>
       
       </li>
        <li className='hold'>
          
            <img src={activUser}/>
       
          <p>Activate user</p>
        </li>
         
      </ul>
      </Dropdown></td>
    
    </tr>
    
   
  ))
}
          </table>
<div className='pagination_'>
  <div >
    showing {pagesPrint() } out of {repeatedUsers.length} entries
  </div>
<div>
    <button className='p_btn'
    disabled={currentPage === 1}
    onClick={() => setCurrentPage((p) => p - 1)}
  >
    <img src={Faleft}/>
  </button>

  {getPagination(currentPage, totalPages, 2).map((page, idx) =>
    page === "..." ? (
      <span key={idx} className="dots">...</span>
    ) : (
      <button
        key={idx}
        className={page === currentPage ? "active" : ""}
        onClick={() => setCurrentPage(Number(page))}
      >
        {page}
      </button>
    )
  )}

  <button className='p_btn'
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage((p) => p + 1)}
  >
   <img src={Faright}/>
  </button>
</div>
    
         </div>
         </div>
         
      </div>
   
  )
}

export default User