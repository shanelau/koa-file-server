#!/bin/bash
# author:菜鸟教程
# url:www.runoob.com

# echo "-- \$* 演示 ---"
# for i in "$*"; do
#     echo $i
# done

# echo "-- \$@ 演示 ---"
# for i in "$@"; do
#     echo $i
# done

add(){
  return $(($1 + $2))
}

add 1 2
echo "输入的两个数字之和为 $? !"

# list=(A B C D)
# B = 'B';

# for a in ${list[@]}; do
#   echo "$a and $($a='B')"
#   if test $a=$B
#   then
#       echo "I am $a"
#   else
#       echo $a
#   fi
# done