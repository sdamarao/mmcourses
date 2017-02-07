Function.prototype.method = function (name, func)
{
    this.prototype[name] = func;
    return this;
};

function clsNodeType()
{
	var Key = null;
	var Value = null;
	var Parent = -0;
	var LeftChild = 0;
	var RightChild = 0;
}

//
// Your basic binary-tree data structure
//
// Includes the standard stuff:
//
//   Add       - add a new record to the tree
//   Delete    - remove the "current" record from the tree
//   MoveFirst - moves to the first item in the tree
//   MoveNext  - moves to the next item in the tree
//   MoveLast  - moves to the last item in the tree
//   MovePrev  - moves to the previous item in the tree
//   Find      - moves to the first item matching a key
//   FindNext  - moves to the next item matching the "current" key
//
//   BOF       - indicates that the current item is at then beginning of the tree
//               (before the 1st item)
//   EOF       - indicates that the current item is at the end of the tree
//               (after the last item)
//   NoMatch   - indicates that no item found with the Find or FindNext methods
//
//   Size      - number of items in the tree.
//
//   Key       - the value of the "key" for the "current" item.
//
//   Value     - the value of the "value" for the "current" item.
//
// and a couple "advanced" methods:
//
//   Position  - moves to sorted item number 'x'
//   Item      - returns the value of the first item matching a key
//               (combined 'Find' and 'Value' method)
//
// Each item has two components - a key (which can be searched on with Find/
// FindNext) and a value.
//
// Both the Key and Value are variant data types.
//
// The tree is orderd according to the "key" component.
//
// Memory from deleted items is not recovered until the last item in the tree is
// deleted.
//
// More bad news - this implementation does not "self-balance" so performance when
// adding item in ascending or decending key order is poor.
//
// The good news is that the tree will expand automatically as needed
// (Although it may be more efficient to pre-allocate with the
// InitTreeSize method before adding any items.) The default size is 100
// items.
//

function clsBTree()
{
	this.Nodes = new Array();
	
	//local variable(s) to hold property value(s)
	this.mvarCurrentValue = null;
	this.mvarSize = 0;
	this.mvarNextEmptyNode = 0;
	this.mvarMaxNodes = 0;
	this.mvarTreeRoot = 0;
	this.mvarCurrentNodePointer = 0;
	this.mvarEOF = false;
	this.mvarBOF = false;
	this.mvarNoMatch = false

	clsBTree.method('Position', function(index)
	{
		//
		// Routine to treat the tree elements as a simple list
		//
		// Uses pure brute force - not efficient at all!
		// (but it does work...)
		//

		var d;

	  this.MoveFirst()
	  d = 0
    
	  while (! this.EOF() )
	  {
		  d++;
	    if (d == Index)
	    {
		    return true;
	    }
        
	    this.MoveNext();
	  }
		return false;
	}
	);

	clsBTree.method('NoMatch', function (value) 
	{ 
	  numargs = arguments.length; 
	  if (numargs == 0) 
	  { 
	    return this.mvarNoMatch;
	  } 
	  else 
	  { 
	    this.mvarNoMatch = value;
	    if (this.Size() == 0)
	    {
	    	this.mvarNoMatch = true;
	    }
	    return true; 
	  } 
	}
	);

	clsBTree.method('BOF', function (value) 
	{ 
	  numargs = arguments.length; 
	  if (numargs == 0) 
	  { 
	    return this.mvarBOF;
	  } 
	  else 
	  { 
	    this.mvarBOF = value;
	    if (this.Size() == 0)
	    {
	    	this.mvarBOF = true;
	    }
	    return true; 
	  } 
	}
	);

	clsBTree.method('EOF', function (value) 
	{ 
	  numargs = arguments.length; 
	  if (numargs == 0) 
	  { 
	    return this.mvarEOF;
	  } 
	  else 
	  { 
	    this.mvarEOF = value;
	    if (this.Size() == 0)
	    {
	    	this.mvarEOF = true;
	    }
	    return true; 
	  } 
	}
	);

	clsBTree.method('CurrentNodePointer', function (value) 
	{ 
	  numargs = arguments.length; 
	  if (numargs == 0) 
	  { 
	    if (this.Size() == 0)
	    {
	    	return -1;
	    }
	    else
	    {
	    	return this.mvarCurrentNodePointer;
	    }
	  } 
	  else 
	  { 
	    this.mvarCurrentNodePointer = value;
	    return true; 
	  } 
	}
	);

	clsBTree.method('TreeRoot', function (value) 
	{ 
	  numargs = arguments.length; 
	  if (numargs == 0) 
	  { 
	  	return this.mvarTreeRoot;
	  } 
	  else 
	  { 
	    this.mvarTreeRoot = value;
	    return true; 
	  } 
	}
	);

	clsBTree.method('MaxNodes', function (value) 
	{ 
	  numargs = arguments.length; 
	  if (numargs == 0) 
	  { 
	  	return this.mvarMaxNodes;
	  } 
	  else 
	  { 
	    this.mvarMaxNodes = value;
	    return true; 
	  } 
	}
	);

	clsBTree.method('NextEmptyNode', function (value) 
	{ 
	  numargs = arguments.length; 
	  if (numargs == 0) 
	  { 
	  	return this.mvarNextEmptyNode;
	  } 
	  else 
	  { 
	    this.mvarNextEmptyNode = value;
	    return true; 
	  } 
	}
	);

	clsBTree.method('InitTreeSize', function(TreeSize)
	{
	  numargs = arguments.length; 
	  if (numargs == 0)
	  {
	  		TreeSize = 100;
	  }

	  this.Nodes[TreeSize] = null;
	  this.Size(0);
  
	  this.NextEmptyNode(1);
	  this.Nodes[this.NextEmptyNode()] = new clsNodeType;
  
	  this.TreeRoot(1);
	  this.MaxNodes(TreeSize);
	  this.EOF(true);
	  this.BOF(true);
	  this.NoMatch(true);
	  this.Nodes[this.NextEmptyNode()].LeftChild = 0;
	  this.Nodes[this.NextEmptyNode()].RightChild = 0;
	  this.Nodes[this.NextEmptyNode()].Parent = 0;
	}
	);

	clsBTree.method('Delete', function()
	{
		var dk = null;
		var ds = 0;
		var dl = 0;
		var dr = 0;
		var dp = 0;
		var dm = 0;
		var Side = 0;
		var pnh = 0;
		var nh = 0;
		var lrec = 0;
		var rrec = 0;

		if (this.CurrentNodePointer() != -1)
		{
	    dk = this.CurrentKey()             // key
	    ds = this.CurrentNodePointer()     // position in file
	    dl = this.Nodes[ds].LeftChild      // left pointer
	    dr = this.Nodes[ds].RightChild     // right pointer
	    dp = this.Nodes[ds].Parent         // parent pointer
	    dm = this.Nodes[ds].Value          // pointer to ACTUAL record

	    if (dp != 0)	                 		 // there is a parent
	    {
		    if ((dl != 0) && (dr == 0))      // left child only
	      {
		      if (this.Nodes[dp].LeftChild == ds)
		      {
		        this.Nodes[dp].LeftChild = dl;
	          Side = 2;
		      }
	        else
					{
	        	this.Nodes[dp].RightChild = dl;
	          Side = 3;                 
	        }
	        this.Nodes[dl].Parent = dp
	      }

	      if ((dr != 0) && (dl == 0))      // right child only
	      {
		      if (this.Nodes[dp].LeftChild == ds)
		      {
		        this.Nodes[dp].LeftChild = dr;
	          Side = 2;
		      }
	        else
	        {
		        Side = 3;
	          this.Nodes[dp].RightChild = dr;
	        }
	        this.Nodes[dr].Parent = dp;
	      }
      
	      if ((dl == 0) && (dr == 0))      //  no child nodes
	      {
		      if (this.Nodes[dp].LeftChild == ds)
		      {
		        this.Nodes[dp].LeftChild = 0;
	          Side = 2;
		      }
	        else
	        {
		        this.Nodes[dp].RightChild = 0;
	          Side = 3;
	        }
	      }

	      if ((dl != 0) && (dr != 0))      // two child nodes
	      {
		      this.Nodes[dl].Parent = dp;
	        pnh = dl;                      
	        nh = this.Nodes[dl].RightChild;
	        while (nh != 0)		             
	        {
		        pnh = nh;                    
	          nh = this.Nodes[nh].RightChild;
	        }
	        this.Nodes[pnh].RightChild = dr;
	        this.Nodes[dr].Parent = pnh;
	        if (this.Nodes[dp].LeftChild == ds)
	        {
						this.Nodes[dp].LeftChild = dl;
		      	Side = 2;
	        }
	        else
	        {
	    	    this.Nodes[dp].RightChild = dl;
	          Side = 3;                    
	        }
	      }
	    }
		  else if (ds == 1)                  // No parent node
	  	{
	      if ((dl != 0) && (dr == 0))      // left child only
	      {
	        lrec = this.Nodes[dl].LeftChild;
	        rrec = this.Nodes[dl].RightChild
	        this.Nodes[dl].Parent = 0;
	        this.Nodes[1] = this.Nodes[dl];
	        if (lrec != 0)
	        {
	          this.Nodes[lrec].Parent = 1
	        }
	        if (rrec != 0)
	        {
	          this.Nodes[rrec].Parent = 1;
	        }
	      }

	      if ((dr != 0) && (dl == 0))      // right child only
	      {
	        lrec = this.Nodes[dr].LeftChild;
	        rrec = this.Nodes[dr].RightChild;
	        this.Nodes[dr].Parent = 0;
	        this.Nodes[1] = this.Nodes[dr];
	        if (lrec != 0)
	        {
						this.Nodes[lrec].Parent = 1;
	        }
	        if (rrec != 0)
	        {
	          this.Nodes[rrec].Parent = 1;
	        }
	      }

	      if ((dl == 0) && (dr == 0))      // no children, no parent
				{
	        this.InitTreeSize(this.MaxNodes());
	        this.Size(1);                  // to adjust for the "Size = Size - 1" at end
				}

	      if ((dl != 0) && (dr != 0))      // two child nodes
	      {
	        lrec = this.Nodes[dl].LeftChild;
	        rrec = this.Nodes[dl].RightChild;
	        this.Nodes[dl].Parent = 0
	        this.Nodes[1] = this.Nodes[dl]
	        if (lrec != 0)
	        {
	          this.Nodes[lrec].Parent = 1;
	        }
	        if (rrec != 0)
	        {
	          this.Nodes[rrec].Parent = 1;
	        }
	        pnh = 1;      
	        nh = this.Nodes[1].RightChild
	        while (nh != 0)
	        {
	          pnh = nh;    
	          nh = this.Nodes[nh].RightChild;
	        }
	        this.Nodes[pnh].RightChild = dr;
	        this.Nodes[dr].Parent = pnh;
	      }
	  	}

	  	this.Size(this.Size() -1);
    
		}
	}
	);

	clsBTree.method('Size', function (value) 
	{ 
	  numargs = arguments.length; 
	  if (numargs == 0) 
	  { 
	  	return this.mvarSize;
	  } 
	  else 
	  { 
	    this.mvarSize = value;
	    return true; 
	  } 
	}
	);

	clsBTree.method('CurrentValue', function (value) 
	{ 
	  numargs = arguments.length; 
	  if (numargs == 0) 
	  {
	  	if (this.CurrentNodePointer() != -1)
	  	{
	  		return this.Nodes[this.CurrentNodePointer()].Value;
	  	}
	  	else
	  	{
	  		return undefined;
	  	}
	  } 
	  else 
	  {
	  	if (this.CurrentNodePointer() != -1)
	  	{
	  		this.Nodes[this.CurrentNodePointer()].Value = value
	  	}
	  	else
	  	{
	  		alert("Can't set value. No Current Record.");
	  	}
	  } 
	}
	);

	clsBTree.method('Find',function(Key)
	{
		var RealRec = 0;
		var PrevRec = 0;

	  if (this.Size() == 0)
	  {
	    this.CurrentNodePointer(-1);
	    this.NoMatch(true);
	    this.BOF(true);
	    this.EOF(true);
	    return false;
	  }
  
	  RealRec = this.TreeRoot();
  
		while (RealRec != 0)
		{
		  PrevRec = RealRec

		  if (Key < this.Nodes[RealRec].Key)
		  {
	      // Branch "left" since key is less than node value
	      RealRec = this.Nodes[RealRec].LeftChild
		  }
		  else if (Key > this.Nodes[RealRec].Key)
	  	{
	    	// Branch "right" since key is greater than node value
	    	RealRec = this.Nodes[RealRec].RightChild;
	  	}
		  else
		  {
		    // We have an "exact" match - but... if there are duplicates
		    // of this key we may have hit in the middle of them so we
		    // have to back-up to the 1st of the duplicates.
  
		    this.CurrentNodePointer(RealRec);
  
		    this.MovePrev();
		    while (this.CurrentKey() == Key)
		    {
			    this.MovePrev();
		    }
  
		    if (! this.BOF())
		    {
			    this.MoveNext();
		    }
		    else
			  {
			    this.MoveFirst();
			  }
  
		    this.EOF(false);
		    this.BOF(false);
		    this.NoMatch(false);
		    return true;
		  }
		}
  
	  //
	  // if we get here then we only have a "close" match
	  // Return "no match" as true but put the current record pointer at the
	  // first record less than the key we searched for.
	  //
	  this.CurrentNodePointer(PrevRec);
	  this.EOF(false);
	  this.BOF(false);
	  this.NoMatch(true);
	  return false;
	}
	);

	clsBTree.method('MoveLast', function()
	{
		var RealRec =0;
		var PrevRec =0;
  
	  if (this.Size() == 0)
	  {
		  this.CurrentNodePointer(-1);
		  this.NoMatch(true);
		  this.BOF(true);
		  this.EOF(true);
		  return;
	  }
  
	  RealRec = this.TreeRoot();
  
		while (RealRec != 0)
		{
		  PrevRec = RealRec;
		  RealRec = this.Nodes[RealRec].RightChild;
		}
  
	  this.CurrentNodePointer(PrevRec);
	  this.EOF(false);
	  this.BOF(false);
	  this.NoMatch(false);
	}
	);

	clsBTree.method('MoveNext', function()
	{
		var tKey = null;
		var RealRec =0;
		var PrevRec =0;

	  if (this.Size() == 0)
	  {
	    this.CurrentNodePointer(-1);
	    this.NoMatch(true);
	    this.BOF(true);
	    this.EOF(true);
	    return;
	  }
  
	  if (this.CurrentNodePointer() == -1)
	  {
	    this.NoMatch(true);
	    return;
	  }
  
	  RealRec = this.CurrentNodePointer();
  
	  if (this.Nodes[RealRec].RightChild != 0)
		{
	    RealRec = this.Nodes[RealRec].RightChild;
    
			while (RealRec != 0)
			{
	      PrevRec = RealRec;
	      RealRec = this.Nodes[RealRec].LeftChild;
			}
	    RealRec = PrevRec;
		}
	  else
	  {
	    tKey = this.Nodes[RealRec].Key;
    
			while (RealRec != 0)
			{
		    if (this.Nodes[RealRec].Key > tKey)
		    {
	        break;
		    }
    
		    RealRec = this.Nodes[RealRec].Parent;
			}
	  }
      
	  if (RealRec == 0)
	  {
	    this.CurrentNodePointer(-1);
	    this.EOF(true);
	    this.BOF(true);
	    this.NoMatch(true);
	  }
	  else
	  {
	    this.CurrentNodePointer(RealRec);
	    this.EOF(false);
	    this.BOF(false);
	    this.NoMatch(false);
	  }
	}
	);

	clsBTree.method('MoveFirst', function()
	{
		var RealRec = 0;
		var PrevRec = 0;

	  if (this.Size() == 0)
	  {
	    this.CurrentNodePointer(-1);
	    this.NoMatch(true);
	    this.BOF(true);
	    this.EOF(true);
	    return;
	  }
  
	  RealRec = this.TreeRoot();
  
	  while (RealRec != 0)
	  {
	    PrevRec = RealRec;
	    RealRec = this.Nodes[RealRec].LeftChild;
	  }
  
	  this.CurrentNodePointer(PrevRec);
	  this.EOF(false);
	  this.BOF(false);
	  this.NoMatch(false);
	}
	);

	clsBTree.method('Add', function(Key, Value)
	{
		var PrevRecord = 0;
		var RealRecord = 0;
		var NewRecord = 0;
		var RightSide = 0;

	  RealRecord = this.TreeRoot();

	  if ( this.TreeRoot() == this.NextEmptyNode() ) // adding first record to an empty tree
	  {
	    this.Nodes[this.NextEmptyNode()] = new clsNodeType;
	    this.Nodes[this.NextEmptyNode()].Key = Key
	    this.Nodes[this.NextEmptyNode()].LeftChild = 0
	    this.Nodes[this.NextEmptyNode()].RightChild = 0
	    this.Nodes[this.NextEmptyNode()].Value = Value
	    this.Nodes[this.NextEmptyNode()].Parent = 0

	    this.NextEmptyNode(this.NextEmptyNode() + 1);
	    this.Nodes[this.NextEmptyNode()] = new clsNodeType;
	    this.CurrentNodePointer(RealRecord);
		}
	  else
	  {
	    while (RealRecord != 0)
	    {
		    PrevRecord = RealRecord;

		    if (Key < this.Nodes[RealRecord].Key)
		    {
		      RealRecord = this.Nodes[RealRecord].LeftChild;
		      RightSide = false;
		    }
		    else
		    {
	        RealRecord = this.Nodes[RealRecord].RightChild;
	        RightSide = true;
		    }
	    }
  
	    if (this.NextEmptyNode() > this.MaxNodes())
	    {
	    	// extend array of nodes (not needed in Javascript)
	    }
    
	    NewRecord = this.NextEmptyNode();
      
	    this.Nodes[NewRecord].Key = Key
	    this.Nodes[NewRecord].LeftChild = 0
	    this.Nodes[NewRecord].RightChild = 0
	    this.Nodes[NewRecord].Value = Value
	    this.Nodes[NewRecord].Parent = PrevRecord
    
	    if (RightSide)
	    {
	      this.Nodes[PrevRecord].RightChild = NewRecord;
	    }
	    else
	    {
	      this.Nodes[PrevRecord].LeftChild = NewRecord;
	    }
    
	    this.NextEmptyNode(this.NextEmptyNode() + 1);
	    this.Nodes[this.NextEmptyNode()] = new clsNodeType;
                            
	    this.CurrentNodePointer(NewRecord);
	  }
  
	  this.EOF(false);
	  this.BOF(false);
	  this.NoMatch(false);
  
	  this.Size(this.Size() + 1);
	}
	);

	clsBTree.method('FindNext', function()
	{
		var TmpKey = null;

	  if (this.Size() == 0)
	  {
	    this.CurrentNodePointer(-1);
	    this.NoMatch(true);
	    this.BOF(true);
	    this.EOF(true);
	    return false;
	  }
  
	  TmpKey = this.CurrentKey();
  
	  this.MoveNext();
  
	  if (this.CurrentKey() != TmpKey)
	  {
	    this.MovePrev();
	    this.NoMatch(true);
	    return false;
	  }
	  else
		{
	    this.NoMatch(false);
	    return true;
		}
	}
	);

	clsBTree.method('Item', function (Key)
	{
	  if ( this.Find(Key) == true )
	  {
	  	return this.CurrentValue();
	  }
	  else
	  {
	  	return undefined;
	  }
	}
	);

	clsBTree.method('MovePrev', function (value) 
	{ 
		var tKey = null;
		var RealRec = 0;
		var PrevRec = 0;

	  if (this.Size() == 0)
	  {
	    this.CurrentNodePointer(-1);
	    this.NoMatch(true);
	    this.BOF(true);
	    this.EOF(true);
	    return; 
	  }
  
	  if (this.CurrentNodePointer() == -1)
	  {
	    this.NoMatch(true);
	    return;
	  }
  
	  RealRec = this.CurrentNodePointer();
  
	  if (this.Nodes[RealRec].LeftChild != 0)
	  {
	    RealRec = this.Nodes[RealRec].LeftChild;
      
			while (RealRec !=0)
			{
	      PrevRec = RealRec;
	      RealRec = this.Nodes[RealRec].RightChild;
			}
      
	    RealRec = PrevRec;
	  }
		else
		{      
	    tKey = this.Nodes[RealRec].Key;
	    RealRec = this.Nodes[RealRec].Parent;
    
			while (RealRec != 0)
			{
	      if (tKey >= this.Nodes[RealRec].Key)
	      {
	        break;
	      }
	      RealRec = this.Nodes[RealRec].Parent;
			}
	  }
      
	  if (RealRec == 0)
	  {
	    this.CurrentNodePointer(-1);
	    this.EOF(false);
	    this.BOF(true);
	    this.NoMatch(true);
	  }
	  else
	  {
	    this.CurrentNodePointer(RealRec);
	    this.EOF(false);
	    this.BOF(false);
	    this.NoMatch(false);
	  }
	}
	);

	clsBTree.method('CurrentKey', function () 
	{ 
	  if (this.CurrentNodePointer() != -1)
	  {
		  return this.Nodes[this.CurrentNodePointer()].Key;
	  }
	  else
	  {
			return undefined;
	  }
	}
	);

	this.InitTreeSize(100);

} // end class


