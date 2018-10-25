export class Frello {
    APP_ID : string ;
    APP_SECRET : string;
    RESULT : string;

    constructor(app_id: string, app_secret: string, result:string){
        this.APP_ID  = app_id;
        this.APP_SECRET = app_secret;
        this.RESULT = result;   
    }

    send_sms(message: string, to: number, from: string ){
        if(from && from.length > 11){
            from = from.substring(0, 11);
        }

        //Code for send Messgae and recieve a 'MESSAGE SENT' response

        /*
        $url = $this->api_base_url."/messages?app_id=".$this->app_id."&app_secret=".base64_encode($this->app_secret);
        $data['to'] = $to;    
        $data['from']= $from;
        $data['message'] = $message;
        $this->result = $this->send_request($url, "POST", [],$data, true);
        return ($this->result->success && $this->result->message=="MESSAGE SENT.");
        */
    }

    send_sms_list(message: string, list: number[], from: string){
        if(from && from.length > 11){
            from = from.substring(0, 11);
        }

        //Code for send Messgae and recieve a 'MESSAGE SENT TO LIST' response

        /*
        $url = $this->api_base_url."/lists/$list_id/send?app_id=".$this->app_id."&app_secret=".base64_encode($this->app_secret);
        $data['from']= $from;
        $data['message'] = $message;
        $this->result = $this->send_request($url, "POST", [],$data, true);
        return ($this->result->success && $this->result->message=="MESSAGE SENT TO LIST.");
        */

    }

    send_template_sms_to_list(template_id: number, list_id: number, variables: string, from: string){
        if(from && from.length > 11){
            from = from.substring(0, 11);
        }

        //Code for send Messgae and recieve a 'MESSAGE SENT TO LIST' response

        /*
        $url = $this->api_base_url."/templates/$template_id?app_id=".$this->app_id."&app_secret=".base64_encode($this->app_secret);
        $data = $variables;
        $data['list_id'] = $list_id;
        $data['from']= $from;
        $this->result = $this->send_request($url, "POST", [],$data, true);
        return ($this->result->success && $this->result->message=="MESSAGE SENT TO LIST.");
        */

    }

    send_template_sms_to_single(template_id: number, to: number, variables: string, from: string){
        if(from && from.length > 11){
            from = from.substring(0, 11);
        }
        
        //Code for send Messgae and recieve a 'MESSAGE SENT' response

        /*
         $url = $this->api_base_url."/templates/$template_id?app_id=".$this->app_id."&app_secret=".base64_encode($this->app_secret);
        $data = $variables;
        $data['to'] = $to;
        $data['from']= $from;
        $this->result = $this->send_request($url, "POST", [],$data, true);
        return ($this->result->success && $this->result->message=="MESSAGE SENT.");
        */

    }

    send_template_sms_to_multiple(template_id: number, to: number, variables: string, from: string){
        if(from && from.length > 11){
            from = from.substring(0, 11);
        }

        //Code for send Messgae and recieve a 'MESSAGE SENT' response

        /*
        $url = $this->api_base_url."/templates/$template_id?app_id=".$this->app_id."&app_secret=".base64_encode($this->app_secret);
        $data = $variables;
        $data['to'] = $to;
        $data['from']= $from;
        $this->result = $this->send_request($url, "POST", [],$data, true);
        return ($this->result->success && $this->result->message=="MESSAGE SENT.");
        */
    }

    send_request(url: string, methode: string, header: string, data: string, jsom: string){
        /*
         $params = array();
        $request_method =$method;
        foreach($data as $key=>$value){
            $params[$key] = is_array($key) ? http_build_query($key) : $value;
        }
        $params = http_build_query($params);
        //initialize and setup the curl handler
        $ch = curl_init();
        //authentication via http
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        //uncomment the following line if your internet connection is proxied.
        //curl_setopt($ch, CURLOPT_PROXY,"proxy:port");
        switch($request_method){
            case 'PUT':
                curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');
                break;
            case 'DELETE':
                curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');
                break;
        }
        if($request_method!='GET')
            curl_setopt($ch, CURLOPT_POSTFIELDS,$params);
        else{
            if(strpos($url, '?expand') === false)
                $url .= "?".$params;
            else
                $url .= "&".$params;
        }
        $url = str_replace(' ', '', $url);
        curl_setopt($ch, CURLOPT_URL, $url);
        //execute the request
        $result = curl_exec($ch);
        //if everything went great, return the data
        return ($result) ? (array) ($json) ? @json_decode($result) : $result : null;
    
    */
    }
}