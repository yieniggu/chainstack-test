# CHAINSTACK TEST

The current repository allows you to listen pending transactions from a given network mempool (in its hash format) and outputs the hashes through console.

### Default networks

We've added some default networks in case you want to try this program quickly: **BSC, ETHEREUM AND POLYGON**. Although you can still add your own network rpc in case you need it. Please consider using just Websockets (wss) rpcs for this version, as HTTPS connections will likely fail.

### Instructions

Clone this repository and go to the project folder:

`git clone https://github.com/yieniggu/chainstack-test.git  
  && cd chainstack-test`

#### In case you wan't to test this program quickly and select one of the given default networks, select it from the list:
![image](https://user-images.githubusercontent.com/45997136/169138238-fb6ee5cb-88a6-4f9b-b14e-d441a3dad998.png)

#### If you prefer to use your own custom rpc endpoint open the .env file and replace the CUSTOM_NODE value with the rpc you want to use. Remember to provide a websocket endpoint format:
![image](https://user-images.githubusercontent.com/45997136/169138541-94091e34-388d-4a21-8165-b194b0fedda3.png)

#### Once you have selected your prefered rpc, you'll start seeing the transaction hashes from the mempool!

![image](https://user-images.githubusercontent.com/45997136/169138759-f4eb9c1e-24cc-4e42-9d4f-299161dabce4.png)
