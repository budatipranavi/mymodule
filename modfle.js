tot=0;
function total(arr)
{
	for(i=0;i<arr.length;i++)
	{
		tot=tot+arr[i];
	}
	return tot;
}
exports.total=total;