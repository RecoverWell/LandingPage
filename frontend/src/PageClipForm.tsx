import React from 'react'

interface IProps {}

export const PageClipForm = (props: IProps) => {
    const styles={marginRight: '12px', paddingLeft: '8px', padding: '5px', borderRadius: '6px',border: '1px gray solid',width: '200px'}
    const emailStyle={...styles,marginRight: '0px'}
    const reasonStyle={...emailStyle,marginTop: '10px', width: '424px', height: '28px'}
    return <>
<form style={{paddingBottom: '200px',backgroundColor: '#f5f5f5'}}
action="https://send.pageclip.co/HT5R7aTfWuzgANm4UveWRCFqTLuOMNxY" className="pageclip-form" method="post">
  {/* <!-- Replace these inputs with your own. Make sure they have a "name" attribute! --> */}
  <div>
  <input style={styles} 
    type="text" name="name" placeholder="Name"/>
  <input style={emailStyle} 
    type="email" name="email" placeholder="Email" />
</div>
<input style={reasonStyle} 
    type="text" name="reason" placeholder="What would you like to know more about?"/>
<div>

</div>
  {/* <!-- This button will have a loading spinner. Keep the inner span for best results. --> */}
  <button style={{border: 'none',
    background: '#008DA5',
    padding: '9px',
    color: 'white',
    minWidth: '85px',
    borderRadius: '7px',
marginTop: '10px'}}
    type="submit" className="pageclip-form__submit">
    <span style={{fontWeight: 'bold'}}>Submit</span>
  </button>
</form>
    </>
}
